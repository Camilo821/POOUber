class Car {
    constructor(license, driver){
        this.id;
        this.driver = driver;
        this.license = license;
        this.passenger;
    }
    printDataCar(){
        console.log(this.driver)
        console.log(this.driver.name)
        console.log(this.driver.document)
    }
}