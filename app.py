from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Predefined responses
responses = {
    "how are you": ["I'm doing great, thank you!", "I'm doing well, how about you?", "I'm good, thanks for asking!"],
    "hello": ["Hi!", "Hello there!", "Hey! How's it going?"],
    "bye": ["Goodbye!", "See you later!", "Take care!"],
    "default": ["Sorry, I didn't quite understand that.", "Could you rephrase that?", "I didn't catch that."]
}

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message').lower()
    
    if user_message in responses:
        return jsonify({'response': random.choice(responses[user_message])})
    else:
        return jsonify({'response': random.choice(responses['default'])})

if __name__ == '__main__':
    app.run(debug=True)
