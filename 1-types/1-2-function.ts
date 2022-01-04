{
  // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // code ...

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Javascript => Typescript
  // Optional Parameter
  function printName(firstName: string, lastName?: string): void {
    console.log("firstName", firstName, "lastName", lastName);
  }
  printName("GW", "P");
  printName("GN");
  printName("Sugar", undefined);

  // Default Parameter
  function printMessage(message: string = "Default message"): void {
    console.log("message", message);
  }
  printMessage();

  // Rest Parameter
  function addNumber(...numbers: number[]): number {
    console.log("numbers", numbers);
    return numbers.reduce((num1: number, num2: number): number => num1 + num2);
  }
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 6));
}
