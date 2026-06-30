# 💬 ChatApp

A full-stack real-time chat application built using **React**, **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **Clerk Authentication**. The application enables secure authentication, real-time messaging, media sharing, and persistent chat history through a modern and responsive interface.

---

## 🚀 Features

- 🔐 Secure user authentication using **Clerk**
- 💬 Real-time one-to-one messaging with **Socket.IO**
- 🖼️ Image sharing using **ImageKit**
- 👤 Automatic user synchronization from Clerk to MongoDB via Webhooks
- 🟢 Online/Offline user status
- 📜 Persistent chat history stored in MongoDB
- 📱 Responsive UI for desktop and mobile
- ⚡ Fast frontend built with React + Vite
- 🌐 Monolithic deployment with Express serving the React frontend

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Clerk Authentication
- ImageKit
- Multer

### Database
- MongoDB Atlas

### Deployment
- Render
- Docker

---

## 📂 Project Structure

```
ChatApp/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── lib/
│   │   ├── webhooks/
│   │   └── server.js
│   └── package.json
│
├── Dockerfile
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/ChatApp.git
cd ChatApp
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

---

## 4. Configure Environment Variables

### Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

FRONTEND_URL=http://localhost:5173

CLERK_SECRET_KEY=your_clerk_secret_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_WEBHOOK_SECRET=your_webhook_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
```

### Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:5000
```

---

# ▶️ Running the Project

### Backend

```bash
cd Backend
npm run dev
```

### Frontend

```bash
cd Frontend
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:4002
```

---

# 🔄 Authentication Flow

```
User
   │
   ▼
Clerk Authentication
   │
   ▼
Webhook Trigger
   │
   ▼
Express Backend
   │
   ▼
MongoDB
```

After a successful signup:

- User account is created in Clerk.
- Clerk sends a webhook to the backend.
- Backend verifies the webhook.
- User details are stored in MongoDB.

---

# 💬 Real-Time Messaging Flow

```
User A
    │
Socket.IO
    │
Server
    │
Socket.IO
    │
User B
```

Messages are:
- Delivered instantly using Socket.IO.
- Stored in MongoDB for future retrieval.

---

# 📷 Image Upload Flow

```
Client
   │
   ▼
Backend
   │
   ▼
ImageKit
   │
   ▼
Image URL
   │
   ▼
MongoDB
```
# 🌐 Deployment

This project is deployed as a **monolithic application** on Render.

The Express server:
- Serves the React frontend.
- Handles REST APIs.
- Manages Socket.IO connections.
- Processes Clerk webhooks.
- Connects to MongoDB Atlas.

---

# 📌 API Endpoints

## Authentication

```
GET    /api/auth/me
```

## Messages

```
GET    /api/messages/:id
POST   /api/messages/send/:id
```

## Clerk Webhook

```
POST /api/webhook/clerk
```

---

# 📦 Main Dependencies

### Backend

- Express
- MongoDB
- Mongoose
- Socket.IO
- Clerk Express
- ImageKit
- Multer
- CORS
- Dotenv

### Frontend

- React
- Vite
- Clerk React

---

# Future Improvements

- Group Chats
- Message Read Receipts
- Typing Indicators
- Voice Messages
- Video Calling
- Emoji Reactions
- Push Notifications
- Chat Search

---

# Author

**Sayan Dolai**

- IIT Kharagpur
- Mechanical Engineering

GitHub: https://github.com/SayanDolai

---