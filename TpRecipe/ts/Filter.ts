export default class Filter {
  constructor(
    private preparation: string,
    private cooking: string,
    private name: string,
    private ingredient: string | null
  ) {
    this.preparation = preparation;
    this.cooking = cooking;
    this.name = name;
    this.ingredient = ingredient;
  }

  public get getPreparation(): string {
    return this.preparation;
  }
  public get getCooking(): string {
    return this.cooking;
  }
  public get getName(): string {
    return this.name;
  }
  public get getingredient(): string {
    return this.ingredient;
  }

  public set setPreparation(v: string) {
    this.preparation = v;
  }
  public set setCooking(v: string) {
    this.cooking = v;
  }
  public set setName(v: string) {
    this.name = v;
  }
  public set setIngredient(v: string) {
    this.ingredient = v;
  }
}
