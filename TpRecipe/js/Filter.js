export default class Filter {
    constructor(preparation, cooking, name, ingredient) {
        this.preparation = preparation;
        this.cooking = cooking;
        this.name = name;
        this.ingredient = ingredient;
        this.preparation = preparation;
        this.cooking = cooking;
        this.name = name;
        this.ingredient = ingredient;
    }
    get getPreparation() {
        return this.preparation;
    }
    get getCooking() {
        return this.cooking;
    }
    get getName() {
        return this.name;
    }
    get getingredient() {
        return this.ingredient;
    }
    set setPreparation(v) {
        this.preparation = v;
    }
    set setCooking(v) {
        this.cooking = v;
    }
    set setName(v) {
        this.name = v;
    }
    set setIngredient(v) {
        this.ingredient = v;
    }
}
