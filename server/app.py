from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # allow browser requests

# Load trained model
model = joblib.load("iris_model.joblib")

species = ["setosa", "versicolor", "virginica"]

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        X = np.array([[
            data["sepal_length"],
            data["sepal_width"],
            data["petal_length"],
            data["petal_width"]
        ]], dtype=float)
    except Exception:
        return jsonify({"error": "Invalid input"}), 400

    pred = int(model.predict(X)[0])
    proba = model.predict_proba(X)[0]

    return jsonify({
        "prediction": pred,
        "label": species[pred],
        "probabilities": {
            "setosa": float(proba[0]),
            "versicolor": float(proba[1]),
            "virginica": float(proba[2])
        }
    })

if __name__ == "__main__":
    app.run(debug=True)
