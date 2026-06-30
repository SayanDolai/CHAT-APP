import express from "express" 
import User from "../models/User.model.js"
import {verifyWebhook} from "@clerk/backend/webhooks"

const router = express.Router()
router.post("/",async(req,res)=>{
    try{
        const signnSecret = process.env.CLERK_WEBHOOK_SECRET
        if(!signnSecret){
            res.status(503).json({message :"CLERK_SIGNING_KEY is not defined"})
            return 
        }
        // clerk's verifier expects a Web Request with the raw body; express.raw gives a Buffer.
    const payload = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : String(req.body);
    const request = new Request("http://internal/webhooks/clerk", {
      method: "POST",
      headers: new Headers(req.headers),
      body: payload,
    });

    // throws if the signature is wrong or the body was tampered with; only then do we trust evt.
    const evt = await verifyWebhook(request, { signnSecret });

    if (evt.type === "user.created" || evt.type === "user.updated") {
      const u = evt.data;

      const email =
        u.email_addresses?.find((e) => e.id === u.primary_email_address_id)?.email_address ??
        u.email_addresses?.[0]?.email_address;

      const username =
        [u.first_name, u.last_name].filter(Boolean).join(" ") || u.username || email?.split("@")[0];

      await User.findOneAndUpdate(
        { clerkId: u.id },
        { clerkId: u.id, email, username: u.username, profilePicture: u.image_url },
        { new: true, upsert: true, setDefaultsOnInsert: true },
      );
    }
    
    if (evt.type === "user.deleted") {
      if (evt.data.id) await User.findOneAndDelete({ clerkId: evt.data.id });
    }

    res.status(200).json({ received: true });
    } catch (error) {
        console.error("Error verifying webhook:", error)
        return res.status(400).json({ error: "Invalid webhook signature" })
    }
})

export default router 