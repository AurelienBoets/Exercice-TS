import { recipes } from "./data.js";
import RecipeInterface from "./RecipeInterface.js";

const preparationInpt = document.getElementById(
  "preparationInpt"
) as HTMLInputElement;
const cookingInpt = document.getElementById("cookingInpt") as HTMLInputElement;
const nameInpt = document.getElementById("nameInpt") as HTMLInputElement;
const ingredientsInpt = document.getElementById(
  "ingredientsInpt"
) as HTMLSelectElement;
const cookingLabel = document.querySelector(
  "label[for=cooking]>span"
) as HTMLSpanElement;
const preparationLabel = document.querySelector(
  "label[for=preparation]>span"
) as HTMLSpanElement;
const recipeContainer = document.getElementById("recipe");

const recipeList: RecipeInterface[] = [];

for (const element in recipes) {
  //   let i = 0;
  //   recipes[element]["id"] = ++i;
  recipeList.push(recipes[element]);
}
console.log(recipeList);

function init(): void {
  preparationLabel.textContent = preparationInpt.value;
  cookingLabel.textContent = cookingInpt.value;
  let ingredientsList: string[] = [];
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
