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
let ingredientsList: string[] = [];
const recipeList: RecipeInterface[] = [];

let i = 0;
for (const element in recipes) {
  recipes[element]["id"] = ++i;
  recipeList.push(recipes[element]);
}

function init(): void {
  preparationLabel.textContent = preparationInpt.value;
  cookingLabel.textContent = cookingInpt.value;
  recipeList.forEach((recipe) => {
    let div = document.createElement("div") as HTMLDivElement;
    div.setAttribute("data-bs-toggle", "modal");
    div.setAttribute("data-bs-target", `#modal${recipe.id}`);
    div.classList.add("mt-2", "border", "border-white", "p-3", "rounded");
    div.innerHTML = `<h2 class="text-center">${recipe.name}</h2><hr><div class="text-center"><img src=./img/chef-hat.svg height=50px width=auto/> <span>${recipe.prepTime}</span>
                    <img src="./img/fire.svg" height=50px width=auto /> <span>${recipe.cookTime}</span></div>`;
    let modal = document.createElement("div") as HTMLDivElement;
    modal.classList.add("modal", "fade");
    modal.setAttribute("id", "modal" + recipe.id);
    modal.innerHTML = `<div class=modal-dialog>
    <div class=modal-content>
    <div class="modal-header">
    <h5 class="modal-title">${recipe.name}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div></div></div>`;
    const modalContent = modal.querySelector(
      ".modal-content"
    ) as HTMLDivElement;

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalBody.innerHTML = `
    <div>
    <h5>Preparation Time</h5>
    <span>${recipe.prepTime}</span>
    <h5>Cooking Time</h5>
    <span>${recipe.cookTime}</span>
    <h5>Servings</h5>
    <span>${recipe.servings}</span>
    <h5>Ingredients</h5>
    <ul class="ingredient-list">
    </ul></div>
    <div>
    <h5>Instruction</h5>
    <ul class="instruction-list">
    </ul>
    </div>
    `;
    const ingredientUl = modalBody.querySelector(
      ".ingredient-list"
    ) as HTMLUListElement;
    const instructionUl = modalBody.querySelector(
      ".instruction-list"
    ) as HTMLUListElement;
    modalContent.appendChild(modalBody);
    // recipe.ingredients.forEach((ingredient) => {
    //   modal.innerHTML += `<li class=list-group-item>${ingredient.name} ${ingredient.amount}</li>`;
    // });
    // modal.innerHTML += `</ul></div>
    // <div>
    // <ul>`;
    // modal.innerHTML += "</ul></div></div></div>";
    recipe.ingredients.forEach((ingredient) => {
      ingredientUl.innerHTML += `<li>${ingredient.name} ${ingredient.amount}</li>`;
      if (!ingredientsList.find((element) => element == ingredient.name)) {
        ingredientsList.push(ingredient.name);
        let option = document.createElement("option") as HTMLOptionElement;
        option.value = ingredient.name;
        option.textContent = ingredient.name;
        ingredientsInpt.appendChild(option);
      }
    });
    recipe.instructions.forEach((instruction) => {
      instructionUl.innerHTML += `<li>${instruction}</li>`;
    });
    recipeContainer.appendChild(div);
    recipeContainer.appendChild(modal);
  });
}

init();
