{
  /**
   *  추상화: 추상화는 외부에서 이 클래스를 사용할 때 어떻게, 무엇을 사용할 것인가? 이 부분을 고민하면서 클래스에서 내부 기능과 외부에서 필요한 기능을 나누는 작업, 이런 프로세스 자체를 추상화라고 부른다.
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
