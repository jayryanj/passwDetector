import joblib
from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return {}

@app.route('check', methods=['POST'])
def check():
    return {}

def predict(password):
    data = joblib.load('../model/password_detector_model.pkl')
    model = data['model']
    vectorizer = data['model']

    transformed_password = vectorizer.transform([password]).tolist()
    return model.predict(transformed_password)

