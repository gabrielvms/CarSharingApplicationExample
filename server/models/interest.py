class Interest:
    def __init__(self, interest):
        self.id = interest['id']
        self.username = interest['username']
        self.origin = interest['origin']
        self.destination = interest['destination']
        self.date = interest['date']