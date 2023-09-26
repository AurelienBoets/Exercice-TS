interface Person {
  nom: string;
  age: number;
}

interface User extends Person {
  occupation: string;
}

interface Admin extends Person {
  role: string;
}

type Personne = Admin | User;

let personneList: Personne[] = [];

let obj: Personne = {
  nom: "Toto Dupont",
  age: 35,
  occupation: "Facteur",
};
personneList.push(obj);
obj = {
  nom: "Jeanne Doe",
  age: 25,
  role: "Admin",
};
personneList.push(obj);
obj = {
  nom: "Michel Michel",
  age: 23,
  occupation: "Lutteur",
};
personneList.push(obj);
obj = {
  nom: "Michael Flinch",
  age: 64,
  role: "Gérant",
};
personneList.push(obj);

personneList.forEach((personne) => {
  console.log(`nom: ${personne.nom} age:${personne.age}`);
});
