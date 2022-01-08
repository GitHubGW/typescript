{
  /**
   *  추상화: 클래스 내에서 정말 필요한 값들만 노출해서
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommericalCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommericalCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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
      console.log("grindBeans");

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enought coffee beans.");
      }

      this.coffeeBeans = this.coffeeBeans - shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("preheat");
    }

    private extract(shots: number): CoffeeCup {
      console.log("extract");
      return { shots, hasMilk: false };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    public makeCoffee() {
      const coffee: CoffeeCup = this.machine.makeCoffee(2);
      console.log("AmateurUser makeCoffee", coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommericalCoffeeMaker) {}

    public makeCoffee() {
      const coffee: CoffeeCup = this.machine.makeCoffee(2);
      console.log("ProBarista makeCoffee", coffee);
      this.machine.fillCoffeeBeans(40);
      this.machine.clean();
    }
  }

  /* 
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  maker.fillCoffeeBeans(30);
  maker.makeCoffee(2);

  const maker2: CommericalCoffeeMaker = CoffeeMachine.makeMachine(30);
  maker2.fillCoffeeBeans(30);
  maker2.makeCoffee(2);
  maker2.clean(); 
  */

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}
