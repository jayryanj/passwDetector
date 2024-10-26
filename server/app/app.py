import joblib
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return {}


@app.route('/check', methods=['POST'])
def check():
    password = request.get_json()["password"]
    return { "rating": analyze_password(password).capitalize() }

def predict(password: str) -> int:
    # Load the model and vectorizer
    data = joblib.load('../model/password_detector_model.pkl')
    model = data['model']
    vectorizer = data['vectorizer']

    # Transform the password and predict its strength
    transformed_password = vectorizer.transform([password])
    return model.predict(transformed_password).tolist()[0] # returns an int randging 0-2

def check_length(password: str) -> int:
    if len(password) <= 6:
        length_rating = 0
    elif len(password) <= 12:
        length_rating = 1
    else:
        length_rating = 2
    return length_rating

def analyze_password(password: str) -> str:
    strength_mapper = {0: "weak", 1: "medium", 2: "strong"}
    rating = min(check_length(password), predict(password))
    return strength_mapper[rating]


if __name__ == '__main__':
    app.run(debug=True)
