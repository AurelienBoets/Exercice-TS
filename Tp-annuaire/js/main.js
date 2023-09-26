import Person from "./class/Person.js";
const btnAdd = document.getElementById("btnAdd");
const btnEdit = document.getElementById("btnEdit");
const btnDelete = document.getElementById("btnDelete");
const btnSubmit = document.getElementById("btnSubmit");
const labelAvatar = document.querySelector("label[for=avatar]");
const inpt = document.querySelectorAll("input");
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
let isEdit = false;
function addPerson(firstName, lastName, birthDate, email, phone, avatar) {
    let person = new Person(firstName, lastName, birthDate, email, phone, avatar);
    personList.push(person);
    let contact = document.createElement("li");
    contact.textContent = firstName + " " + lastName;
    contact.setAttribute("data-id", `${person.getId}`);
    contactList.appendChild(contact);
}
function selectPerson(id) {
    imgAvatar.classList.remove("hide");
    labelAvatar.classList.add("hide");
    inptAvatar.classList.add("hide");
    btnSubmit.classList.add("hide");
    inpt.forEach((element) => {
        element.disabled = true;
    });
    personList.forEach((element) => {
        if (element.getId == id) {
            currentPerson = id;
            inptFirstName.value = element.getFirstName;
            inptLastName.value = element.getLastName;
            let birthDate = element.getBirthDate;
            let year = birthDate.toLocaleString("default", { year: "numeric" });
            let month = birthDate.toLocaleString("default", { month: "2-digit" });
            let day = birthDate.toLocaleString("default", { day: "2-digit" });
            inptBirthDate.value = year + "-" + month + "-" + day;
            inptEmail.value = element.getEmail;
            inptPhone.value = element.getPhone;
            imgAvatar.setAttribute("src", element.getAvatar);
        }
    });
}
function deletePerson(id) {
    personList = personList.filter((person) => person.getId != id);
}
contactList.addEventListener("click", (e) => {
    let element = e.target;
    if (element.getAttribute("data-id")) {
        selectPerson(parseInt(element.getAttribute("data-id")));
    }
});
btnAdd.addEventListener("click", () => {
    imgAvatar.classList.add("hide");
    labelAvatar.classList.remove("hide");
    inptAvatar.classList.remove("hide");
    btnSubmit.classList.remove("hide");
    inpt.forEach((element) => {
        element.disabled = false;
        element.value = "";
    });
});
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let verif;
    inpt.forEach((element) => {
        if (element.getAttribute("id") != "avatar" && element.value == "") {
            verif = false;
        }
    });
    let date = new Date(inptBirthDate.value);
    if (inptAvatar.value == "") {
        addPerson(inptFirstName.value, inptLastName.value, date, inptEmail.value, inptPhone.value);
    }
    else {
        addPerson(inptFirstName.value, inptLastName.value, date, inptEmail.value, inptPhone.value, inptAvatar.value);
    }
    if (isEdit == true) {
        deletePerson(currentPerson);
        let parent = contactList;
        let child = document.querySelector(`[data-id="${currentPerson}"]`);
        parent.removeChild(child);
        currentPerson = -1;
        isEdit = false;
    }
    selectPerson(personList[personList.length - 1].getId);
});
btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPerson > 0) {
        deletePerson(currentPerson);
    }
    let parent = contactList;
    let child = document.querySelector(`[data-id="${currentPerson}"]`);
    parent.removeChild(child);
    currentPerson = -1;
    inpt.forEach((element) => {
        element.value = "";
    });
});
btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPerson > 0) {
        imgAvatar.classList.add("hide");
        labelAvatar.classList.remove("hide");
        inptAvatar.classList.remove("hide");
        btnSubmit.classList.remove("hide");
        isEdit = true;
        inpt.forEach((element) => {
            element.disabled = false;
        });
    }
});
let date = new Date("2000/09/12");
addPerson("Aurélien", "Boets", date, "aurelien@boets.fr", "0606060606");
date = new Date("1999/05/21");
addPerson("Michele", "Dupont", date, "michele@dupont.fr", "060504030201");
