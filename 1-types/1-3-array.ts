{
  // Array (한 가지의 타입만 가지는 배열)
  const fruits: string[] = ["🍅", "🍌", "🥝"];
  const numbers: number[] = [1, 2, 3];
  const numbers2: Array<number> = [1, 2, 3];

  // readonly Array<string> 현재까지는 사용 불가 (readonly string[]는 가능)
  function printArray(fruits: readonly string[]): readonly string[] {
    // fruits는 readonly가 선언된 인자이기 때문에 함수 내부에서 push()등을 이용해서 수정이 불가능
    // Property 'push' does not exist on type 'readonly string[]'.
    // fruits.push("hello");
    return fruits;
  }

  // Tuple (서로 다른 타입을 가지는 배열) (비추천)
  // interface, type alias, class로 사용하는 것을 추천
  let student: [string, number];
  student = ["gw", 10];
  student[0]; // "gw"
  student[1]; // 10
  const [name, age] = student;
  console.log(name, age);
}
