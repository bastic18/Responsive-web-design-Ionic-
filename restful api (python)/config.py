CRSF_ENABLED = True

SQLALCHEMY_DATABASE_URI = "mysql://root:@localhost/ncbdemo"

SECRET_KEY = "secretkey"

#################creating tables
from app import db
db.create_all() 