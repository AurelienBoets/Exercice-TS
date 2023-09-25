import Person from "./class/Person.js";
const btnAdd = document.getElementById("btnAdd");
const btnEdit = document.getElementById("btnEdit");
const btnDelete = document.getElementById("btnDelete");
const btnSubmit = document.getElementById("btnSubmit");
const inptFirstName = document.getElementById("firstName");
const inptLastName = document.getElementById("lastName");
const inptBirthDate = document.getElementById("birthDate");
const inptAvatar = document.getElementById("avatar");
const inptEmail = document.getElementById("email");
const inptPhone = document.getElementById("phone");
const imgAvatar = document.getElementById("avatarImg");
let contactList = document.getElementById("contact-list");
let personList = [];
let currentPerson;
function addPerson(firstName, lastName, birthDate, email, phone, avatar) {
    let person = new Person(firstName, lastName, birthDate, email, phone, avatar);
    personList.push(person);
    let contact = document.createElement("li");
    contact.textContent = firstName + " " + lastName;
    contact.setAttribute("data-id", `${person.getId}`);
    contactList.appendChild(contact);
}
function selectPerson(id) {
    let person;
    personList.forEach((element) => {
        if (element.getId == id) {
            currentPerson = id;
            person = element;
        }
        inptFirstName.value = person.getFirstName;
        inptLastName.value = person.getLastName;
        inptBirthDate.value = `${person.getBirthDate}`;
        inptEmail.value = person.getEmail;
        inptPhone.value = person.getPhone;
    });
}
let date = new Date("12/09/2000");
addPerson("Aurélien", "Boets", date, "aurelien@boets.fr", "0606060606");
contactList.addEventListener("click", (e) => {
    let element = e.target;
    if (element.getAttribute("data-id")) {
        selectPerson(parseInt(element.getAttribute("data-id")));
    }
});
