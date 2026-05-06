🧠 Habit Tracker App (Python + Angular)

Web application for tracking daily habits, with progress visualization and a foundation ready for future artificial intelligence features.

🚀 Description

This project is a full-stack application where users can:

Create and manage personal habits
Track their daily progress
View basic statistics
(Future) Receive intelligent recommendations based on their behavior

The main goal is to build a solid foundation by combining a modern frontend with a Python backend, following best practices and scalable architecture.

🧱 Tech Stack
Backend
Python
FastAPI
SQLite (initial database)
SQLAlchemy (ORM)
JWT for authentication
Frontend
Angular
RxJS
Angular Material / custom CSS
DevOps / Deploy
Docker (optional)
Render / Railway (backend)
Vercel / Netlify (frontend)
📦 Features (MVP)
🔐 Authentication
User registration
JWT-based login
Route protection
✅ Habit Management
Create habits
Edit / delete habits
List habits
📅 Daily Tracking
Mark habits as completed
Completion history
📊 Dashboard
Completion percentage
Streaks (consecutive days)
Basic progress visualization
🧠 Future Improvements (AI)

The project is designed to evolve towards artificial intelligence features:

Personalized habit recommendations
Daily completion prediction
Behavior pattern analysis
“Virtual coach” with generated advice
🗂️ Project Structure
habit-tracker/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── routes/
│   │   ├── services/
│   │   └── core/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── guards/
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/habit-tracker.git
cd habit-tracker
2. Backend (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload

API available at:

http://localhost:8000

Auto-generated docs:

http://localhost:8000/docs
3. Frontend (Angular)
cd frontend
npm install
ng serve

App available at:

http://localhost:4200
🔐 Environment Variables

Example (.env):

DATABASE_URL=sqlite:///./habit.db
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
🧪 Testing (optional)
pytest
📌 Roadmap

CRUD for habits

JWT authentication

Basic dashboard

Initial deployment

Basic tests

Simple recommendations

AI integration

🎯 Project Goal

This project aims to:

Strengthen backend skills in Python
Integrate a modern frontend with REST APIs
Build a realistic portfolio project
Serve as a foundation for future AI applications
📄 License

MIT License

🤝 Contributions

Contributions are welcome.

Feel free to open an issue or submit a pull request.

👨‍💻 Author

Your name here

GitHub: https://github.com/XaviSerrano