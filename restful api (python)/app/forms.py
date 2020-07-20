from flask_wtf import FlaskForm

from wtforms import TextField, PasswordField, TextAreaField, DateTimeField
from wtforms.fields import FloatField
from wtforms.validators import Required, Email, EqualTo, ValidationError, Length
from flask_wtf.file import FileField, FileRequired, FileAllowed

class RegistrationForm(FlaskForm):
    firstname = TextField('Firstname', [Required()])
    lastname = TextField('Lastname', [Required()])
    username = TextField('Username', [Required()])
    email = TextField('Email', [Required(), Email()])
    password = PasswordField('Password', [Required()])
    confirm = PasswordField('Confirm Password', [Required(), EqualTo('password', message='Passwords must match.')])

class LoginForm(FlaskForm):
    email = TextField('Email', [Required(), Email()])
    password = PasswordField('Password', [Required()])

class EventForm(FlaskForm):
    title = TextField('Title', [Required()])
    name = TextField('Name', [Required()])
    description = TextAreaField('Description', [Required()])
    category = TextField('Category', [Required()])
    start_date = TextField('Start Date', [Required()])
    end_date = TextField('End Date', [Required()])
    cost = FloatField('Cost', [Required()])
    venue = TextField('Venue', [Required()])    
    flyer = FileField('Flyer', validators=[FileAllowed(['jpg', 'png', 'Images only!'])])