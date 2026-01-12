# 🌸 Iris Flower Species Detection

A modern web application that predicts iris flower species using machine learning. Built with Flask backend and a beautiful, responsive HTML/CSS/JS frontend.

## Features

✨ **Machine Learning Prediction**
- Predicts iris species (Setosa, Versicolor, Virginica)
- Displays probability scores for each species
- Real-time predictions via REST API

🎨 **Beautiful UI**
- Flower-themed design with gradient background
- Smooth animations and transitions
- Fully responsive on mobile and desktop
- Glass-morphism effect cards

⚡ **Easy to Use**
- Simple input form for iris measurements
- Pre-filled example data for each species
- Clear result display with probabilities

## Project Structure

```
irisFlower/
├── client/                 # Frontend files
│   ├── index.html         # HTML structure
│   ├── style.css          # Flower-themed styling
│   └── app.js             # Client-side logic
├── server/                # Backend files
│   ├── app.py             # Flask API server
│   └── iris_model.joblib  # Trained ML model
├── Untitled.ipynb         # Jupyter notebook for analysis
└── README.md              # This file
```

## Installation

### Prerequisites
- Python 3.7+
- pip (Python package manager)
- A modern web browser

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install required Python packages:
```bash
pip install flask flask-cors scikit-learn joblib
```

### Frontend Setup

The frontend requires no installation - just open `client/index.html` in your browser.

## Usage

### Start the Backend Server

```bash
cd server
python app.py
```

The API will be available at `http://127.0.0.1:5000`

### Access the Application

1. Open `client/index.html` in your web browser
2. Enter iris measurements (or use the example buttons)
3. Click "Predict" to see the predicted species and probabilities

### Input Parameters

- **Sepal Length**: Length of the sepal (cm)
- **Sepal Width**: Width of the sepal (cm)
- **Petal Length**: Length of the petal (cm)
- **Petal Width**: Width of the petal (cm)

## API Endpoint

**POST** `/predict`

### Request Body
```json
{
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.2
}
```

### Response
```json
{
  "prediction": "setosa",
  "probabilities": {
    "setosa": 0.95,
    "versicolor": 0.04,
    "virginica": 0.01
  }
}
```

## Technologies Used

- **Backend**: Python, Flask, scikit-learn
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **ML Model**: Scikit-learn Iris Classifier
- **Deployment**: Flask development server

## Dataset

This project uses the classic Iris dataset, containing 150 samples of iris flowers from three species with four measured features.

## License

This project is open source and available under the MIT License.

## Author

Created as a demonstration of machine learning integration with web applications.

---

**Note**: Ensure the Flask server is running on `http://127.0.0.1:5000` before using the web interface.
