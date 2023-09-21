# web-app-angular-flask
This project showcases the client framework with Angular and the backend with Flask to actualize the chatGPT environment.

### Installation steps:
- Install the latest stable versions of node, angular-cli
- Install miniconda (create virtual environment)
- pip install flask flask-cors
- In `./client` directory, run `npm install` to install all node packages/modules for client development
- You need to register on replicate website and get a `free` API Token

### App run:
- Open a terminal, in `./client` run `npm run start`. This will run your client application on `localhost:5500`
- Open a separate terminal (or parallel to the previous one), in `./services` run `python app.py`. This will run your api endpoint on `localhost:5000`
- Keep in mind that your endpoint api allows only calls from `localhost:5500`


#### Future:
- You may want to replace calling the `replicate` library with the `LLAMA 2.0` model you get from [Meta AI repository](https://github.com/facebookresearch/llama/blob/main/README.md?fbclid=IwAR2-1UwstL_S1EIXuxCEFExOJFFF9BRMUE7aDJHw8FCRXPcKGeic6sYM67Y#inference)
