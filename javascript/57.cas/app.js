// file for class subject 

// class Car {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     fullName() {
//         return console.log(this.name + " " + this.type);
//     }
// }
// const newCar = new Car("audi", "limo");
// console.log(newCar);
// newCar.fullName();

// class imeIprezime {
//     constructor(ime, prezime) {
//         this.ime = ime;
//         this.prezime = prezime;
//     }
// }
// const newnaAndln = new imeIprezime("ahmed", "krkmisevic");
// console.log(newnaAndln);

// create a new class User with data like name,lName,yearofBirth
// create a method which will calculate how old is user.

class User {
    constructor(name, lName, yearofBirth) {
        this.name = name;
        this.lName = lName;
        this.yearofBirth = yearofBirth;
    }
    fullName() {
        return console.log(2022 - this.yearofBirth)
    }
}
class aditionalInfo extends User {
    constructor(street, city, state, numberPhone) {
        super();
        this.street = street;
        this.city = city;
        this.state = state;
        this.numberPhone = numberPhone;
        this.number = this.numberHandler(this.state, this.numberPhone)
    }

    numberHandler(state, numberPhone) {
        this.findState = this.statesArr.find((s) => s.state === state);
        return numberPhone.replace(numberPhone[0], this.findState.cId);
    }
    nesto() {
        return {
            name: `${newUser.name}`,
            lName: `${newUser.lName}`,
            yearofBirth: yearofBirth`${newUser.yearofBirth}`,
            street: `${this.street}`,
            city: `${this.city}`,
            state: `${this.state}`,
            numberphone: `${this.numberPhone}`,
            number: `${this.number}`
        }
    }

}
const newInfo = new aditionalInfo("hadzet", "novi paazar", "srbija", 066317)
console.log(newInfo);
console.log(nesto());
const newUser = new User("ahmed", "krkmisevic", 2003)
console.log(newUser);
const additional = new aditionalInfo("rifatab", "")
newUser.fullName();

statesArr = [
    {
        state: "USA",
        cId: "+1"
    },
    {
        state: "mexico",
        cId: "+52"
    },
    {
        state: "india",
        cId: "+91"
    },
    {
        state: "china",
        cId: "+86"
    },
    {
        state: "serbia",
        cId: "+381"
    },
    {
        state: "Uk",
        cId: "+44"
    },
];


