class Car {
    constructor(carName, carType) {
        this.name = carName;
        this.type = carType;
    }

    showAttr() {
        return console.log(this.name, this.type);
    }
}

const newCar = new Car("audi", "limo");

newCar.showAttr();