# Curiosity Unlocked 101

**Curiosity is a way of learning.**

Curiosity Unlocked 101 (CU101) is an educational platform built around one simple idea: learning should start with a question.

Instead of simply presenting information, CU101 encourages users to explore a question, follow it deeper, learn through structured lessons, and test their understanding along the way.

The platform combines educational content with an interactive learning experience centered around **Curio**, the character and visual identity of Curiosity Unlocked 101.

---

## ✨ What is CU101?

Curiosity Unlocked 101 is designed as a place where users can:

* Explore interesting questions and topics
* Discover learning paths through different subjects
* Read structured lessons
* Test their understanding through quizzes
* Track lesson completion
* Create an account and access the learning experience
* Explore the CU101 ecosystem and its social platforms

The current version is the first functional foundation of the platform. The goal is to continue expanding it into a richer content-driven learning system.

---

## 🚀 V1 Features

The current version includes:

* Curiosity-based topic exploration
* Learning and lesson navigation
* Database-backed course and lesson content
* Interactive quizzes
* Quiz answer feedback
* Lesson completion flow
* User authentication
* Sign-in and sign-up
* Responsive web interface
* About and Social sections
* Curio-based visual identity
* Backend API connected to the frontend
* MongoDB-backed content

---

## 🛠️ Technology Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### Backend

* **Node.js**
* **Express**
* **TypeScript**

### Database

* **MongoDB**
* **Mongoose**

### Authentication

* **Clerk**

### Development

* **Turbopack**
* **npm**
* **Git / GitHub**

---

## 🏗️ Project Structure

The project is divided into two main applications:

```text
Curiosity-Unlocked-101-Website/
│
├── curiosity-unlocked-101/
│   └── Frontend
│
└── curiosity-unlocked-101-api/
    └── Backend API
```

The frontend communicates with the backend API, which handles application data and database operations.

---

## 💻 Running the Project Locally

### 1. Clone the repository

```bash
git clone <repository-url>
cd Curiosity-Unlocked-101-Website
```

### 2. Install frontend dependencies

```bash
cd curiosity-unlocked-101
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend runs by default at:

```text
http://localhost:3000
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd curiosity-unlocked-101-api
npm install
```

### 5. Configure environment variables

Create the required `.env` file for the backend and provide the necessary database and authentication configuration.

### 6. Start the backend

```bash
npm run dev
```

The backend runs by default on:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

The project uses environment variables for configuration and sensitive credentials.

These values should **never be committed to GitHub**.

Typical configuration includes:

```text
MongoDB connection
Clerk configuration
API configuration
```

The exact environment variables required may evolve as the platform grows.

---

## 🧠 Current Learning Flow

The current learning experience follows a simple structure:

```text
Explore
   ↓
Choose a topic
   ↓
Start learning
   ↓
Read the lesson
   ↓
Take the quiz
   ↓
Receive feedback
   ↓
Complete the lesson
```

This structure will evolve as more learning features are introduced.

---

## 🎨 Brand & Design

CU101 is built around **Curio**, the visual character of Curiosity Unlocked 101.

The design focuses on:

* Curiosity
* Simplicity
* Friendly educational experiences
* Visual storytelling
* Clear navigation
* Learning through exploration

The interface is intentionally designed to feel more like an exploration platform than a traditional educational dashboard.

---

## 📌 Project Status

### Version 1 — Functional Foundation

The current version establishes the core platform architecture and learning experience.

Implemented:

* Frontend
* Backend API
* Database integration
* Authentication
* Learning flow
* Lesson system
* Quiz system
* Completion flow
* Core branding and UI

The platform is currently being developed incrementally, with new functionality added as the project evolves.

---

## 🔮 Roadmap

Planned future development includes:

* Admin dashboard
* Course and lesson management
* Quiz and checkpoint management
* Content management system
* Image management
* Cloudinary integration
* More courses and lessons
* More quizzes and interactive learning elements
* User learning statistics
* Expanded feedback/review management
* Production deployment
* Additional platform improvements

This README will be updated as these features are implemented.

---

## 👨‍💻 Development

Curiosity Unlocked 101 is an independently developed project combining software engineering, educational content, visual design, and experimentation.

The project is continuously evolving, with each version building on the previous foundation.

---

**Curiosity Unlocked 101 — Curiosity is a way of learning.**
