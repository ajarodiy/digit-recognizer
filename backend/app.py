from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image
import io

model = tf.keras.models.load_model('digit_model.keras')
app = Flask(__name__)

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
        img_array = np.array(img)
        img_array = img_array / 255.0 
        img_array = img_array.reshape(1, 28, 28, 1)

        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions)
        return jsonify({'prediction': int(predicted_class)})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
