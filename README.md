# ✍️ Digit Recognizer

A machine learning web app that recognizes handwritten digits (0–9) using a Convolutional Neural Network (CNN).
It demonstrates how deep learning models can be trained, deployed, and served through a modern web application.

---

## 🛠️ Key Technologies Used

- **Frontend:** React.js (Drawing Canvas, Dynamic Interaction)
- **Backend:** Flask (Python API)
- **Machine Learning:** TensorFlow/Keras (Convolutional Neural Network)
- **Model Architecture:**
  - Two Conv2D + MaxPooling2D layers for feature extraction
  - A Dense (64 neurons) layer for learning feature combinations
  - A final Dense (10 neurons) output layer for digit classification
- **Deployment:**
  - Frontend hosted on Vercel
  - Backend containerized with Docker and hosted on Render
- **DevOps:** Custom Dockerfile, Environment Variables Handling
- **Dataset:** MNIST Handwritten Digits Dataset

--- 

## 🌐 Live Demo

👉 [View Live Project Here](https://ajarodiy.me/digit-recognizer)

---

## ⚙️ Setup Instructions (Run Locally)

### 1. Clone the Repository

```bash
git clone https://github.com/ajarodiy/digit-recognizer.git
cd digit-recognizer
```

### 2. Set up the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
The backend will run on `http://localhost:5000`

### 3. Set up the Frontend

```bash
cd frontend
npm install
npm start
```
The frontend will run on `http://localhost:3000`

---

## ✨ Highlights and Learning Outcomes

- Gained hands-on experience building and training a Convolutional Neural Network (CNN) for image recognition.
- Learned to use TensorFlow/Keras advanced APIs for model saving/exporting (.keras format and SavedModel).
- Created a custom Dockerfile to handle ML model deployment on cloud servers.
- Solved challenges related to TensorFlow environment compatibility (buildpacks vs Docker).
- Deployed multi-service architecture (Frontend + Backend) across Vercel and Render.
- Set up subpath routing under a custom domain.
- Implemented CORS handling, image preprocessing (color inversion, resizing), and secure server practices.

---

## ✨ Future Improvements

- Implement real-time prediction while drawing.
- Add drawing history tracking and prediction visualization.
- Optimize backend further with TensorFlow Lite for faster inference times.