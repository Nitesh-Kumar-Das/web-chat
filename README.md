# 💬 TalkTide - Real-Time Web Chat Application 🌐

Welcome to **TalkTide**, a modern real-time chat application built with the MERN stack. Connect with friends, share moments, and stay in touch with your loved ones. 🚀

🌍 **Live Demo**: [TalkTide on Render](https://web-chat-eeit.onrender.com)

---

## ✨ Features

- 🔒 **Authentication**: Secure signup, login, and logout functionality.
- 🖼️ **Profile Management**: Update your profile picture and view account details.
- 🎨 **Custom Themes**: Choose from 30+ themes to personalize your chat interface.
- 📷 **Image Sharing**: Send and receive images in real-time.
- 🟢 **Online Status**: See who's online and filter contacts by availability.
- 🔔 **Notification Sound**: Get notified with a sound when you receive a message.
- 💬 **Real-Time Messaging**: Chat with friends instantly using WebSockets.
- 🌐 **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## 🛠️ Tech Stack

### **Frontend** 🖥️
- **React**: For building the user interface.
- **Vite**: Lightning-fast development environment.
- **TailwindCSS**: For modern and responsive styling.
- **DaisyUI**: Pre-built UI components with theme support.
- **Socket.IO Client**: For real-time communication.

### **Backend** 🖧
- **Node.js**: Server-side runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and message data.
- **Socket.IO**: For real-time WebSocket communication.
- **Cloudinary**: For image storage and management.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Cloudinary** account for image uploads

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/web-chat.git
   cd web-chat
   ```

2. **Install dependencies**:
   ```bash
   # Install backend dependencies
   npm install --prefix backend

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` folder and add the following:
   ```env
   PORT=5001
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   NODE_ENV=development
   ```

4. **Run the application**:
   ```bash
   # Start the backend server
   npm run dev --prefix backend

   # Start the frontend development server
   npm run dev --prefix frontend
   ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 📂 Project Structure

### **Backend**
```
backend/
├── controllers/       # API controllers
├── lib/               # Utility libraries (DB, Cloudinary, Socket.IO)
├── middleware/        # Authentication middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── seeds/             # Database seeders
└── src/               # Entry point for the backend
```

### **Frontend**
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── constants/     # Static constants (e.g., themes)
│   ├── lib/           # Utility functions and Axios instance
│   ├── pages/         # Page components (e.g., Login, Home)
│   ├── store/         # Zustand state management
│   └── assets/        # Static assets (e.g., images)
└── public/            # Public assets (e.g., notification sound)
```

---

## 🌈 Themes

TalkTide supports 30+ themes powered by DaisyUI. You can switch between themes in the **Settings** page. Some popular themes include:

- 🌞 Light
- 🌙 Dark
- 🧁 Cupcake
- 🕶️ Retro
- 🧛 Dracula
- 🌲 Forest
- 🏢 Corporate
- 🦄 Synthwave

---

## 📸 Screenshots

### **Home Page**
![image](https://github.com/user-attachments/assets/9bb651bc-d7e7-4db9-9a84-7afc60e58df4)


## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 🛡️ License

Open to all
