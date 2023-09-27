import { recipes } from "./data.js";
const preparationInpt = document.getElementById("preparationInpt");
const cookingInpt = document.getElementById("cookingInpt");
const nameInpt = document.getElementById("nameInpt");
const ingredientsInpt = document.getElementById("ingredientsInpt");
const cookingLabel = document.querySelector("label[for=cooking]>span");
const preparationLabel = document.querySelector("label[for=preparation]>span");
const recipeContainer = document.getElementById("recipe");
const recipeList = [];
for (const element in recipes) {
    //   let i = 0;
    //   recipes[element]["id"] = ++i;
    recipeList.push(recipes[element]);
}
console.log(recipeList);
function init() {
    preparationLabel.textContent = preparationInpt.value;
    cookingLabel.textContent = cookingInpt.value;
    let ingredientsList = [];
    recipeList.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if (!ingredientsList.find((element) => element == ingredient.name)) {
                ingredientsList.push(ingredient.name);
            }
        });
    });
    console.log(ingredientsList);
}
init();
