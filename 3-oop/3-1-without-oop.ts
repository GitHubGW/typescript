{
  /**
   *  절차지향적으로 커피기계 만들기
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 20;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans.");
    }

    coffeeBeans = coffeeBeans - shots * BEANS_GRAMM_PER_SHOT;
    return { shots, hasMilk: false };
  }

  const coffee: CoffeeCup = makeCoffee(2);
  console.log("coffee", coffee);
}
