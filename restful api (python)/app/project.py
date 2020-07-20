

@app.route('/events', methods = ['GET'])
def getEvents():
    events = Event.query.all()
    event_list = []
    for event in events:
        event_data = {}
        event_data["id"] = event.id
        event_data["name"] = event.name
        event_data["description"] = event.description
        event_data["category"] = event.category
        event_data["title"] = event.title
        event_data["start_dt"] = event.start_dt
        event_data["end_dt"] = event.end_dt
        event_data["cost"] = float(event.cost)
        event_data["venue"] = event.venue
        event_data["flyer"] = event.flyer
        event_data["visibility"] = event.visibility
        event_list.append(event_data)
    return jsonify({'Events':event_list})


@app.route('/user/<user_id>', methods = ['PUT'])
@token_required
def updateUser(current_user,user_id):

    if str(current_user.user_id) != str(user_id):
        return jsonify({'Message':'Sorry, function not permitted bitch!'})
    user = User.query.filter_by(user_id = user_id).first()
    if not user:
        return jsonify({'Message':'User does not exist!'})
    
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'],method ='sha256')

    user.firstname = data['firstname']
    user.lastname = data['lastname']
    user.username = data['username']
    user.email = data['email']
    user.password =hashed_password
    user.admin = False

    db.session.commit()

    return jsonify({'Message':'This user with emain : %s is now updated' %user.email})

    
@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'],method ='sha256')

    user = User(firstname = data['firstname'], lastname = data['lastname'], username = data['username'], email = data['email'], password =hashed_password, admin = False)
    db.session.add(user)
    db.session.commit()
    return jsonify({'Message':'The user was created'})
