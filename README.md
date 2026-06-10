# 📝 TaskFlow — MERN Todo App

A full-stack Todo application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

![MERN Stack](https://img.shields.io/badge/Stack-MERN-6c63ff)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Local-brightgreen)

---

## 🚀 Features

- ✅ Add, complete, and delete tasks
- 🔍 Filter tasks: All / Active / Completed
- 📊 Progress bar showing completion
- 💾 Data stored in MongoDB
- 🌐 REST API with Express.js
- ⚡ Real-time updates with React state

---

## 🏗️ Project Structure

```
todo-app/
├── backend/
│   ├── models/
│   │   └── Todo.js          # Mongoose schema
│   ├── routes/
│   │   └── todoRoutes.js    # API routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server entry point
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js           # Main React component
    │   ├── App.css          # Styles
    │   └── index.js         # React entry point
    └── package.json
```

---

## ⚙️ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation)
- npm (comes with Node.js)

---

## 🔧 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=mongodb://localhost:27017/todoapp
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

> Backend runs on: http://localhost:5000

### 3. Setup Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm start
```

> Frontend runs on: http://localhost:3000

---

## 🌐 API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| GET    | /api/todos        | Get all todos       |
| POST   | /api/todos        | Create a new todo   |
| PATCH  | /api/todos/:id    | Toggle completed    |
| DELETE | /api/todos/:id    | Delete a todo       |

---

## 🛠️ Tech Stack

| Layer     | Technology        |
|-----------|-------------------|
| Frontend  | React.js 18       |
| Backend   | Node.js + Express |
| Database  | MongoDB           |
| ODM       | Mongoose          |
| HTTP      | Axios             |

---

## 📸 Screenshots

<img width="1919" height="871" alt="Screenshot 2026-06-11 025617" src="https://github.com/user-attachments/assets/32ddff35-9270-4426-ba1c-256109bea0e1" />
<img width="1919" height="871" alt="Screenshot 2026-06-11 030510" src="https://github.com/user-attachments/assets/5bab065a-33fd-40dc-8839-9d738d47c471" />
<img width="1919" height="874" alt="Screenshot 2026-06-11 030453" src="https://github.com/user-attachments/assets/fa774430-6d45-487a-bd70-3fa03313eb57" />


---

## 👨‍💻 Author

**Umang** — MERN Stack Assignment Project
