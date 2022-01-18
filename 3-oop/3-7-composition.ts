{
  /**
   *  구성
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
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

    private extract(shots: number): CoffeeCup {
      console.log("extract", shots);
      return { shots, hasMilk: false };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(coffee);
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steamMilk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steamMilk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steamMilk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getSugar");
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, hasSugar: true };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getSugar");
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, hasSugar: true };
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
