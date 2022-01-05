{
  /**
   * Type Inference
   */

  let text = "hello";
  text = "hi";

  function print(message = "hi"): void {
    console.log(message);
  }

  print("hello");
  // print(1); // Argument of type '1' is not assignable to parameter of type 'string | undefined'.

  function add(x: number, y: number): number {
    return x + y;
  }

  const result: number = add(1, 2);
}
