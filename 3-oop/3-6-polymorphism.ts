{
  /**
   *  다형성: 하나의 인터페이스나 부모의 클래스를 상속한 자식 클래스들이 인터페이스와 부모 클래스에 있는 함수들을 다른 방식으로 다양하게 구성하므로서 조금 더 다형성을 만들어 볼 수 있는 것을 말한다.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    private steamMilk(): void {
      console.log("steamMilk");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee: CoffeeCup = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(10);
      return { ...coffee, hasSugar: true };
    }
  }

  const machines: CoffeeMaker[] = [new CoffeeMachine(16), new CaffeLatteMachine(16, "A"), new SweetCoffeeMaker(16)];

  machines.map((machine) => {
    console.log("---------------");
    // machine.fillCoffeeBeans(30);
    // machine.clean();
    machine.makeCoffee(1);
  });
}
