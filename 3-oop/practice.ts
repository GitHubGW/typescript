{
  /**
   * Practice
   */

  type Person = {
    name: string;
    age: number;
  };

  interface Amateur {
    country: string;
    doEasy(): void;
  }

  interface Pro {
    doEasy(): void;
    doHard(): void;
  }

  class User implements Amateur, Pro {
    country = "KR";
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    doEasy() {
      console.log("Do Easy");
    }

    doHard() {
      console.log("Do Hard");
    }
  }

  class AmateurUser {
    constructor(private type: Amateur) {}

    doEasyAmateur() {
      this.type.doEasy();
      console.log("Amateur Do Easy");
    }
  }

  class ProUser {
    constructor(private type: Pro) {}

    doEasyPro() {
      this.type.doEasy();
      console.log("Pro Do Easy");
    }

    doHardPro() {
      this.type.doHard();
      console.log("Pro Do Hard");
    }
  }

  const user: User = new User("gw", 10);

  const amateurUser = new AmateurUser(user);
  amateurUser.doEasyAmateur();

  const proUser = new ProUser(user);
  proUser.doEasyPro();
  proUser.doHardPro();
}
