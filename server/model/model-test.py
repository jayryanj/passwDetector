import joblib

def character_tokenizer(password):
    return list(password)

data = joblib.load('password_detector_model.pkl')

model = data["model"]
vectorizer = data["vectorizer"]

print(model.predict(vectorizer.transform(["123", "12Jsk39asIIfm01gh"])).tolist())