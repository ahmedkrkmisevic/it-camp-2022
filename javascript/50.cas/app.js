person = {
    firstName: "Ahmed",
    lastName: "krkmisevic",
};
person.fullName = function () {
    return this.firstName + " " + this.lastName
}
console.log(person);

function User(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
} const ahmed = new User("Ahmed", "krkmisevic");


User.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};
console.log(ahmed);
console.log(ahmed.fullName());

//2. Opcija je preko funkcije na sledeci nacin:
// unutar objekta userFunctions stavljamo sve metode koje zelimo dodati u
// objekte napravljene na sledeci nacin.
const UserFunctions = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

function createUser(firstName, lastName) {
    const newUser = Object.create(UserFunctions)
    newUser.firstName = firstName
    newUser.lastName = lastName
    return newUser;
}
const ahmed1 = createUser("ahmed", "krkmisevic");
console.log(ahmed1.fullName());