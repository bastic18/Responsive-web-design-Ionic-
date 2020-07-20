from flask import Flask
from flask_sqlalchemy import SQLAlchemy

UPLOAD_FOLDER = 'C:\\Users\\basti\\Downloads\\SCRUM 9\\app\\static\\uploads'
CRSF_ENABLED = True

SQLALCHEMY_DATABASE_URI = "mysql://root:@localhost/ncbdemo9"

SECRET_KEY = "secretkey"

app = Flask(__name__)
db = SQLAlchemy(app)

# images_folder = './app/static/photos'
# app.config['UPLOAD_FOLDER'] = images_folder

app.config.from_object(__name__)

from app import views