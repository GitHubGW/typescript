{
  /**
   *  상속
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("Value for coffeeBeans should be more than 0.");
      }

      this.coffeeBeans = this.coffeeBeans + coffeeBeans;
    }

    clean() {
      console.log("clean");
    }

    private grindBeans(shots: number): void {
      console.log("grindBeans", shots);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enought coffee beans.");
      }

      this.coffeeBeans = this.coffeeBeans - shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("preheat");
    }

    private extract(shots: number): CoffeeCup {
      console.log("extract", shots);
      return { shots, hasMilk: false };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 부모로부터 상속받은 자식 클래스에서 생성자 함수를 사용할 때는, 부모의 생성자 또한 호출해 줘야 하기 때문에 super()를 통해 부모 생성자를 호출해준다.
    // 부모 생성자 함수에 필요한 인자 또한 자식 클래스의 생성자 함수에서 받아와서 넘겨줄 수 있다.
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    private steamMilk(): void {
      console.log("steamMilk");
    }

    makeCoffee(shots: number): CoffeeCup {
      // 자식 클래스에서 부모 클래스의 public메서드들에 접근하기 위해서는 super키워드를 사용한다.
      const coffee: CoffeeCup = super.makeCoffee(shots);
      console.log("coffee", coffee);

      this.steamMilk();

      return { ...coffee, hasMilk: true };
    }
  }

  const machine: CoffeeMachine = new CoffeeMachine(25);
  const latteMachine: CaffeLatteMachine = new CaffeLatteMachine(25, "ABCD");
  const coffee: CoffeeCup = latteMachine.makeCoffee(1);
  console.log("coffee", coffee);
  console.log("latteMachine serialNumber", latteMachine.serialNumber);
}
