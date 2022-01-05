{
  /**
   * Type Assertion: 해당 타입을 정말 확신하는 경우가 아니라면 되도록 사용하지 않기
   * result as string
   * <string>result
   */

  function jsStringFunction(): any {
    return "hello";
    // return 2;
  }

  const result = jsStringFunction();
  console.log(result.length);
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as number[]).push(1));
  wrong.push(1);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // Object is possibly 'undefined'.
  // (numbers as number[]).push(2);
  numbers!.push(2);

  // const button = document.querySelector('button')!;
}
