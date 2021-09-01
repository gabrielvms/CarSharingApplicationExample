class Ride:
    def __init__(self, ride):
        self.id = ride['id']
        self.username = ride['username']
        self.origin = ride['origin']
        self.destination = ride['destination']
        self.date = ride['date']
        self.seats = ride['seats']