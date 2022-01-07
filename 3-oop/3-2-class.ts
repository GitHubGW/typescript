{
  /**
   *  객체지향적으로 커피기계 만들기
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // class level: 클래스와 연결 되어있기 때문에, 객체마다 생성되지 않는다.
    // 또한 static을 붙인 대상들은 class level들이기 때문에 Class 외부에서 불러와서 사용할 수 있다. (ex:  Math.abs, Math.floor())
    // 즉, 객체를 생성하지 않고도 class level에서 프로퍼티나 함수들을 호출해서 사용할 수 있었던 것이다.
    static BEANS_GRAMM_PER_SHOT: number = 7;

    // instance (object) level: 객체마다 생성되는 멤버 변수
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans.");
      }

      this.coffeeBeans = this.coffeeBeans - shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }

  const maker: CoffeeMaker = new CoffeeMaker(30);
  console.log("maker", maker);

  const maker2: CoffeeMaker = new CoffeeMaker(20);
  console.log("maker2", maker2);

  const maker3: CoffeeMaker = CoffeeMaker.makeMachine(50);
  console.log("maker3", maker3);
}
