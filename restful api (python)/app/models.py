from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), index=True, unique=True)
    email = db.Column(db.String(100), index=True, unique=True)
    password = db.Column(db.String(140), nullable=False)
    admin = db.Column(db.Boolean,  default=0, nullable=False)
    
    def __repr__(self):
        return "<User %r>" % (self.email)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    start_dt = db.Column(db.DateTime, nullable=False)
    end_dt = db.Column(db.DateTime, nullable=False)
    cost = db.Column(db.Numeric(7, 2), nullable=False)
    venue = db.Column(db.String(250), nullable=False)
    flyer = db.Column(db.String(200), nullable=False)
    visibility = db.Column(db.Boolean,  nullable=False, default=0)
    creator = db.Column(db.Integer(), db.ForeignKey('user.id'))
    date_created = db.Column(db.Date, nullable=False)

