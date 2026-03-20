from flask import Flask

def create_app():
    app = Flask(__name__)
    app.secret_key = 'super_secret_key_helpdesk'

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
