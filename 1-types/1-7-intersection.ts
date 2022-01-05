{
  /**
   * Intersection Types: AND (발생할 수 있는 모든 케이스들을 포함하고 싶을 때 주로 사용)
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  internWork({
    name: "gw",
    score: 10,
    employeeId: 1,
    work: () => {},
  });
}
