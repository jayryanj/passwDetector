import joblib
from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return {}


@app.route('/check', methods=['POST'])
def check():
    request_data = request.get_json()
    return { "rating": predict(request_data["password"]) }


def predict(password):
    # Load the model and vectorizer, ensuring the tokenizer is defined
    data = joblib.load('../model/password_detector_model.pkl')
    model = data['model']
    vectorizer = data['vectorizer']
    strength_mapper = {0: "weak", 1: "medium", 2: "strong"}

    # Transform the password and predict its strength
    transformed_password = vectorizer.transform([password])
    return strength_mapper[model.predict(transformed_password).tolist()[0]]


if __name__ == '__main__':
    app.run(debug=True)
