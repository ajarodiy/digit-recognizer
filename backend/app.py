from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

model = tf.keras.models.load_model('digit_model')
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Service is running!"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})

    file = request.files['file']

    try:
        img = Image.open(file).convert('L')  # convert to grayscale
        img = img.resize((28, 28))
        img = Image.fromarray(255 - np.array(img))
        img_array = np.array(img)
        img_array = img_array / 255.0 
        img_array = img_array.reshape(1, 28, 28, 1)

        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions)

        confidence = np.max(predictions)
        if confidence < 0.7:
            return jsonify({'error': 'Low confidence. Unable to recognize the digit.'})
        else:
            return jsonify({'prediction': int(predicted_class)})

    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
