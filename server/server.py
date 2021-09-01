from flask import Flask, Response, request
from flask_cors import CORS
from time import sleep
import json


from services.rideService import RideService
from models.interest import Interest
from models.ride import Ride
from models.user import User

app = Flask(__name__, static_url_path="")
cors = CORS(app, resources={r"/*": {"origins": "*"}})
rideService = RideService()

@app.route("/")
def home():
    return "Server is running"

@app.route("/sign-up", methods=["POST"])
def signUp():
    data = json.loads(request.data)
    username = rideService.signUp(data['user'])
    if username != -1:
        return json.dumps(username), 200
    else:
        return "Something Went Wrong", 500

@app.route("/rides")
def getRides():
    rides = rideService.getRides()
    return json.dumps(rides)

@app.route("/rides/<username>")
def getMyRides(username):
    rides = rideService.getRidesByUser(username)
    return json.dumps(rides)

@app.route("/add-ride", methods=["POST"])
def addRide():
    data = json.loads(request.data)
    rideId = rideService.addRide(data['ride'])
    if int(rideId) > -1:
        return json.dumps(rideId), 200
    else:
        return "Something Went Wrong", 500

@app.route("/remove-ride", methods=["POST"])
def removeRide():
    data = json.loads(request.data)
    rideId = rideService.removeRide(data['rideId'])
    if int(rideId) > -1:
        return json.dumps(rideId), 200
    else:
        return "Something Went Wrong", 500

@app.route("/interests")
def getInterests():
    interests = rideService.getInterests()
    return json.dumps(interests)

@app.route("/interests/<username>")
def getMyInterests(username):
    interests = rideService.getInterestsByUser(username)
    return json.dumps(interests)

@app.route("/add-interest", methods=["POST"])
def addInterest():
    data = json.loads(request.data)
    interestId = rideService.addInterest(data['interest'])
    if int(interestId) > -1:
        return json.dumps(interestId), 200
    else:
        return "Something Went Wrong", 500

@app.route("/remove-interest", methods=["POST"])
def removeInterest():
    data = json.loads(request.data)
    interestId = rideService.removeInterest(data['interestId'])
    if int(interestId) > -1:
        return json.dumps(interestId), 200
    else:
        return "Something Went Wrong", 500

@app.route("/stream/<username>")
def stream(username):
    def eventStream():
        while True:
            clientInterests = rideService.getInterestsByUser(username)
            clientRides = rideService.getRidesByUser(username)

            ridesForClientInterests = []
            for interest in clientInterests:
                ridesForClientInterests.extend(rideService.getRidesByInterest(interest))
                
            interestsForClientRides = []
            for ride in clientRides:
                interestsForClientRides.extend(rideService.getInterestsByRide(ride))

            yield f"event: message\ndata: {json.dumps({'rides':ridesForClientInterests, 'interests': interestsForClientRides})}\n\n"
            sleep(3)
    
    return Response(eventStream(), mimetype="text/event-stream")

app.run('localhost')