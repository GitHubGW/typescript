{
  /**
   * Javascript
   * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
   * Object(객체타입): function, array, object
   */

  // number
  const num1: number = 1;
  const num2: number = -1;
  const num3: number = 1.5;

  // string
  const str1: string = "hello";
  const str2: string = "hello123";

  // boolean
  const bool1: boolean = true;
  const bool2: boolean = false;

  // undefined
  let name: undefined; // X
  let age: number | undefined;
  age = undefined;
  age = 10;

  // null
  let person: null; // X
  let person2: string | null;
  person2 = "gw";

  // function
  function find(): number | undefined {
    return 1;
  }

  // unknown (되도록 사용하지 않기)
  let notSure: unknown;
  notSure = 0;
  notSure = "hello";
  notSure = true;

  // any (되도록 사용하지 않기)
  let anything: any;
  anything = 0;
  anything = "hello";
  anything = true;

  // void
  function print(): void {
    console.log("hello");
  }
  let unusable: void = undefined; // X

  // never (함수가 리턴되지 않을 때)
  function throwError(message: string): never {
    /* 
    while (true) {
      console.log("hello");
    } 
    */

    throw new Error(message);
  }
  let neverEnding: never; // X

  // object (되도록 사용하지 않기)
  let obj: object; // X
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "gw" });
  acceptSomeObject({ animal: "dog" });
}
