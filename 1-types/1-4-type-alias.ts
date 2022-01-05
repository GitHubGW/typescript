{
  /**
   * Type Alias
   */
  type Num = number;
  type Text = string;

  const num1: Num = 10;
  const name: string = "gw";
  const address: Text = "kr";

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = { name: "gw", age: 10 };

  /**
   * String Literal Types
   */
  type Name = "name";
  let myName: Name;
  myName = "name";
  // myName = "hello"; // Type '"hello"' is not assignable to type '"name"'.

  type User = "user";
  let myUser: User;
  myUser = "user";

  type Boal = true;
  const isDog: Boal = true;
  // const isCat: Boal = false; // Type 'false' is not assignable to type 'true'.
}
