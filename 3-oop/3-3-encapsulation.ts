{
  /**
   *  캡슐화하기
   *  캡슐화는 클래스를 만들 때, 외부에서 접근할 수 있는 것은 무엇인지, 외부에서 접근할 수 없는 내부적으로만 가능한 데이터는 무엇인지 결정할 수 있다.
   *  그래서 외부에 노출해도 되는 것은 무엇이고, 노출하면 안되는 것은 무엇인지를 잘 생각해서 클래스를 만드는 것이 중요하다.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: 따로 설정하지 않았다면 기본 값으로 외부에서 접근 가능함
  // private: 외부에서 볼 수 없고, 접근할 수 없는 상태로 만듦
  // protected: 외부에서는 접근할 수 없지만 클래스를 상속한 자식 클래스에서는 접근이 가능함
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("Value for coffeeBeans should be more than 0.");
      }

      this.coffeeBeans = this.coffeeBeans + coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans.");
      }

      this.coffeeBeans = this.coffeeBeans - shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }

  // const maker: CoffeeMaker = new CoffeeMaker(30); // Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.
  // maker.coffeeBeans = -10; // Property 'coffeeBeans' is private and only accessible within class 'CoffeeMaker'.
  // maker.fillCoffeeBeans(55);

  CoffeeMaker.makeMachine(25);

  /**
   * getter는 읽기 전용: get fnName(){}
   * setter는 쓰기 전용: set fnName(){}
   */
  class User {
    private internalAge = 4;

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("num can't be less than 0.");
      }
      this.internalAge = num;
    }

    constructor(public firstName: string, public lastName: string) {}
  }

  const user: User = new User("gw", "p");
  console.log("user", user);
  console.log("user.fullName", user.fullName);
  console.log("user.age", user.age);
  user.age = 99;
  console.log("user.age", user.age);

  // user.firstName = "gn";
  // console.log("user2", user.fullName);
}
