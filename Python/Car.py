from Account import Account
class Car:
    id = int
    license = int
    driver = Account("","")
    passenger = str
    def __init__(self, license, driver)