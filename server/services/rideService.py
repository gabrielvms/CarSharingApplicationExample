from models.ride import Ride
from models.user import User
from models.interest import Interest

class RideService:
    def __init__(self):
        self.users = []
        self.rides = []
        self.interests = []
        self.gId = 1000

    def signUp(self, _user):
        try:
            user = User(_user)
            self.users.append(user)
            return user.username
        
        except:
            return -1

    def getRides(self):
        return list(map(vars, self.rides))

    def getRidesByUser(self, username):
        return list(filter(lambda x: x['username'] == username, self.getRides()))

    def getRidesByInterest(self, interest):
        return list(filter(lambda x: 
                                    x['username'] != interest['username'] and
                                    x['origin'] == interest['origin'] and
                                    x['origin'] == interest['origin'] and
                                    x['date'] == interest['date'],
                            self.getRides()))

    def addRide(self, _ride):
        try:
            ride = Ride(_ride)
            ride.id = str(self.gId)
            self.gId += 1
            self.rides.append(ride)
            return ride.id

        except:
            return -1

    def removeRide(self, rideId):
        try:
            for ride in self.rides:
                if ride.id == rideId:
                    self.rides.remove(ride)
                    return rideId

            return -1
        except:
            return -1
        

    def getInterests(self):
        return list(map(vars, self.interests))

    def getInterestsByUser(self, username):
        return list(filter(lambda x: x['username'] == username, self.getInterests()))

    def getInterestsByRide(self, ride):
        return list(filter(lambda x: 
                                    x['username'] != ride['username'] and
                                    x['origin'] == ride['origin'] and
                                    x['origin'] == ride['origin'] and
                                    x['date'] == ride['date'],
                            self.getInterests()))

    def addInterest(self, _interest):
        try:
            interest = Interest(_interest)
            interest.id = str(self.gId)
            self.gId += 1
            self.interests.append(interest)
            return interest.id

        except:
            return -1

    def removeInterest(self, interestId):
        try:
            for interest in self.interests:
                if interest.id == interestId:
                    self.interests.remove(interest)
                    return interestId
                    
            return -1
        except:
            return -1
    

    
