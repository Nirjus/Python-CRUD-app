from app import app, db

from flask import request, jsonify
from models import Friend

# Get all friends
@app.route("/api/friends",  methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

# create a friend
@app.route("/api/friends", methods=["POST"])
def create_friends():
    try:
        data = request.json
        required_fields = ("name", "role", "description", "gender")
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({
                    "error": f"missing required field {field}"
                }), 400
        # name = ""
        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        image_url = f"https://avatar.iran.liara.run/public/{gender}?username={name.replace(" ","")}"
        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=image_url)
        db.session.add(new_friend)
        db.session.commit()

        return jsonify({"msg": "Friend created successfully"}),201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
# Delete a friend
@app.route("/api/friends/<int:id>", methods=["DELETE"])
def delete_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({
                "error": "Friend not found"
            }), 400
        db.session.delete(friend)
        db.session.commit()

        return jsonify({
            "msg": "Friend is deleted"
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({
            "error": str(e)
        }), 500
    
# Edit a friend
@app.route("/api/friends/<int:id>", methods=["PATCH"])
def update_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({
                "error": "Friend not found"
            }), 400
        data = request.json

        friend.name = data.get("name", friend.name)
        friend.role = data.get("role", friend.role)
        friend.description = data.get("description", friend.description)
        friend.gender = data.get("gender", friend.gender)

        db.session.commit()

        return jsonify({
            "msg": "Friend details updated",
            "friend": friend.to_json()
        }), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({
            "error": str(e)
        }), 500