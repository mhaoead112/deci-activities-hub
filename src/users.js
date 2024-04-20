class User {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phone = data.phone;
    }
    displayInfo() {
        console.log(data);
    }
}
let moh = new User({
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
})
function displayInfo(user) {
    console.log(moh);
}
displayInfo()
console.log(moh);