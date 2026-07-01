# Web-Chat - Real-Time Web Chat Application

Web-Chat is a real-time chat application built on the MERN stack. It supports instant messaging, image sharing, online presence indicators, and customizable themes.


---

## Features

- **Authentication** — Secure signup, login, and logout.
- **Profile Management** — Update profile pictures and view account details.
- **Custom Themes** — Choose from 30+ themes to personalize the chat interface.
- **Image Sharing** — Send and receive images in real time.
- **Online Status** — View who is online and filter contacts by availability.
- **Notification Sound** — Receive an audible alert for incoming messages.
- **Real-Time Messaging** — Instant communication powered by WebSockets.
- **Responsive Design** — Optimized for both desktop and mobile devices.

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development environment and build tool |
| TailwindCSS | Utility-first CSS framework |
| DaisyUI | Pre-built UI components with theme support |
| Socket.IO Client | Real-time client-side communication |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Server-side runtime |
| Express | Web framework for REST APIs |
| MongoDB | NoSQL database for users and messages |
| Socket.IO | Real-time WebSocket communication |
| Cloudinary | Image storage and management |

---

## Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **MongoDB** (local or cloud instance)
- **Cloudinary** account for image uploads

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nitesh-Kumar-Das/web-chat.git
   cd web-chat
   ```

2. **Install dependencies**:
   ```bash
   # Backend
   npm install --prefix backend

   # Frontend
   npm install --prefix frontend
   ```

3. **Configure environment variables**:
   Create a `.env` file in the `backend` directory with the following values:
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

## Project Structure

### Backend

```
backend/
├── controllers/       # API controllers
├── lib/               # Utility libraries (DB, Cloudinary, Socket.IO)
├── middleware/         # Authentication middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── seeds/             # Database seeders
└── src/               # Application entry point
```

### Frontend

```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── constants/     # Static constants (e.g., themes)
│   ├── lib/           # Utility functions and Axios instance
│   ├── pages/         # Page components (Login, Home, etc.)
│   ├── store/         # Zustand state management
│   └── assets/        # Static assets
└── public/            # Public assets (e.g., notification sound)
```

---

## Themes

Web-Chat supports over 30 themes powered by DaisyUI. Themes can be switched from the Settings page. Available options include Light, Dark, Cupcake, Retro, Dracula, Forest, Corporate, Synthwave, and more.

---

## Screenshots

### Home Page

![image](https://github.com/user-attachments/assets/9bb651bc-d7e7-4db9-9a84-7afc60e58df4)

---

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

---

## License

Open to all.
