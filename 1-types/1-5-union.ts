{
  /**
   * Union Types: OR (발생할 수 있는 다양한 케이스 중 하나를 정하고 싶을 때 주로 사용)
   */

  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log("direction", direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;

  const tile: TileSize = 8;
  // const tile: TileSize = 5; // Type '5' is not assignable to type 'TileSize'.

  /**
   * function: login -> success, fail
   */
  type LoginState = SuccessState | FailState;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  function login(id: string, password: string): LoginState {
    if (id && password) {
      return { response: { body: "success" } };
    }

    return { reason: "fail" };
  }

  login("sugar", "1234");

  // printLoginState(state: LoginState) -> success, fail
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
