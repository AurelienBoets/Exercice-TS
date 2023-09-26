class Person {
    constructor(firstName, lastName, birthDate, email, phone, avatar = "./asset/unknown.jpg") {
        this.id = Person.count++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
    }
    get getFirstName() {
        return this.firstName;
    }
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    set setLastName(lastName) {
        this.lastName = lastName;
    }
    get getBirthDate() {
        return this.birthDate;
    }
    set setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    get getPhone() {
        return this.phone;
    }
    set setPhone(phone) {
        this.phone = phone;
    }
    get getAvatar() {
        return this.avatar;
    }
    set setAvatar(avatar) {
        this.avatar = avatar;
    }
    get getId() {
        return this.id;
    }
}
Person.count = 1;
export default Person;
