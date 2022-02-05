{
  /**
   *  추상화
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return { shots, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return { shots, hasSugar: true };
    }
  }

  const machines: CoffeeMaker[] = [new CaffeLatteMachine(16, "A"), new SweetCoffeeMaker(16)];

  machines.map((machine) => {
    console.log("---------------");
    machine.makeCoffee(1);
  });
}
