Habit Tracker App 🧠

Modern full-stack habit tracking application built with FastAPI and React.

The project focuses on clean architecture, JWT authentication, habit analytics, and future AI-powered features.

🚀 Description

Habit Tracker is a web application where users can:

Create and manage personal habits
Track daily progress
Visualize consistency and streaks
Access protected routes with JWT authentication
Build long-term habits through daily tracking

The backend is designed as a scalable REST API, while the frontend focuses on a modern and responsive user experience.

The long-term vision is to evolve the platform with intelligent recommendations and behavioral analysis powered by AI.

🧱 Tech Stack
Backend
Python
FastAPI
SQLAlchemy
SQLite
JWT Authentication
Pydantic
Uvicorn
Frontend
React
Vite
Tailwind CSS
Axios
Context API
DevOps / Deployment
Docker (optional)
Railway
Render
Vercel
📦 Features (MVP)
🔐 Authentication
User registration
JWT login
Protected routes
Current authenticated user endpoint (/me)
✅ Habit Management
Create habits
Edit habits
Delete habits
List user habits
📅 Daily Tracking
Mark habits as completed
Habit completion history
User-based habit ownership
📊 Dashboard (Next Steps)
Completion percentage
Weekly/monthly statistics
Habit streaks
Progress visualization
🧠 Future AI Features

The architecture is intentionally designed to support future AI integrations:

Personalized habit recommendations
Completion prediction
Behavioral pattern analysis
AI habit coach
Smart notifications and reminders
🗂️ Project Structure
habit-tracker/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── core/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── layouts/
│   │
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/XaviSerrano/habit-tracker.git

cd habit-tracker
🐍 Backend Setup (FastAPI)
2. Create virtual environment
cd backend

python -m venv venv
3. Activate virtual environment
Windows
venv\Scripts\activate
macOS / Linux
source venv/bin/activate
4. Install dependencies
pip install -r requirements.txt
5. Start backend server
uvicorn app.main:app --reload

Backend available at:

http://localhost:8000

Swagger docs:

http://localhost:8000/docs
⚛️ Frontend Setup (React + Vite)
1. Navigate to frontend
cd frontend
2. Install dependencies
npm install
3. Start development server
npm run dev

Frontend available at:

http://localhost:5173
🔐 Environment Variables

Create a .env file inside backend/

Example:

DATABASE_URL=sqlite:///./habit.db

SECRET_KEY=your_secret_key_here

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30
🔑 API Authentication Flow
Register user
Login via /login
Receive JWT token
Send token in Authorization header:
Authorization: Bearer <token>
📌 Current Roadmap
Backend
 JWT authentication
 Habit CRUD
 Habit completion tracking
 Streak system
 Statistics endpoints
 Pagination & filters
 PostgreSQL migration
 Alembic migrations
 Automated tests
Frontend
 Authentication pages
 Dashboard UI
 Habit cards
 Daily completion UI
 Charts & analytics
 Responsive design
 Dark mode
🎯 Project Goals

This project aims to:

Improve backend development skills with Python
Build production-style REST APIs
Learn modern frontend architecture
Practice authentication systems
Create a scalable portfolio project
Prepare the foundation for AI-powered features
📄 License

MIT License

🤝 Contributions

Contributions, suggestions, and feedback are welcome.

Feel free to open an issue or submit a pull request.

👨‍💻 Author

Xavi Serrano

GitHub:

XaviSerrano GitHub