from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:5500"}})


# Replace this with your authentication logic
def authenticate(username, password):
    # Implement your authentication logic here
    # Return True if authentication is successful, False otherwise
    return username == 'admin' and password == 'pass'

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5500'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Credentials'] = 'true'  # If you need cookies to be sent cross-origin
    return response

@app.route('/api/authenticate', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if authenticate(username, password):
        # Authentication successful
        return jsonify({'message': 'Authentication successful'})
    else:
        # Authentication failed
        return jsonify({'message': 'Authentication failed'}), 401

if __name__ == '__main__':
    app.run(debug=True)