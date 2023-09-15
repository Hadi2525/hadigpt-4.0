from flask import Flask, jsonify
from flask_restful import Resource, Api
from flasgger import Swagger

app = Flask(__name__)
api = Api(app)

# Configure Swagger UI
swagger = Swagger(app)

# Define a sample API resource
class ExternalApi(Resource):
    def get(self):
        """
        Get data from an external API.

        This endpoint retrieves data from an external API.

        ---
        responses:
          200:
            description: Data retrieved successfully.
          500:
            description: Internal Server Error.
        """
        try:
            # Replace with your external API URL
            external_api_url = "https://api.example.com/data"
            
            # Make a request to the external API
            response = requests.get(external_api_url)
            data = response.json()

            return jsonify(data), 200
        except Exception as e:
            return jsonify({"error": "Internal Server Error"}), 500

# Add the API resource to the Flask app
api.add_resource(ExternalApi, '/external-api')

if __name__ == '__main__':
    app.run(debug=True)
