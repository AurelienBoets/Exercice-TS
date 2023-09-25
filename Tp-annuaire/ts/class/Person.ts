export default class Person {
  private static count: number = 1;
  private id: number;
  private firstName: string;
  private lastName: string;
  private birthDate: Date;
  private email: string;
  private phone: string;
  private avatar: string;
  constructor(
    firstName: string,
    lastName: string,
    birthDate: Date,
    email: string,
    phone: string,
    avatar: string = "../asset/unknown.jpg"
  ) {
    this.id = Person.count++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
  }

  public get getFirstName(): string {
    return this.firstName;
  }

  public set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public get getLastName(): string {
    return this.lastName;
  }

  public set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public get getBirthDate(): Date {
    return this.birthDate;
  }

  public set setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }

  public get getEmail(): string {
    return this.email;
  }

  public set setEmail(email: string) {
    this.email = email;
  }

  public get getPhone(): string {
    return this.phone;
  }

  public set setPhone(phone: string) {
    this.phone = phone;
  }

  public get getAvatar(): string {
    return this.avatar;
  }

  public set setAvatar(avatar: string) {
    this.avatar = avatar;
  }

  public get getId(): number {
    return this.id;
  }
  private edit(): void {
    console.log("slt");
  }
}
