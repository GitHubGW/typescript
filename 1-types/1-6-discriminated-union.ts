{
  /**
   * Discriminated Union Types
   */

  /**
   * function: login -> success, fail
   */
  type LoginState = SuccessState | FailState;
  type SuccessState = {
    result: "success";
    body: string;
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  function login2(id: string, password: string): LoginState {
    if (id && password) {
      return { result: "success", body: "success" };
    }

    return { result: "fail", reason: "fail" };
  }

  // printLoginState(state: LoginState) -> success, fail
  function printLoginState2(state: LoginState): void {
    // state.result -> success or fail
    if (state.result === "success") {
      console.log(state.body);
    } else {
      console.log(state.reason);
    }
  }

  /**
   *  Example
   */
  type User = Owner | Delivery;
  type Owner = {
    name: "owner";
    owner: string;
  };
  type Delivery = {
    name: "delivery";
    delivery: string;
  };

  /* 
  이 방법보다는 아래 방법을 좀 더 추천
  function handleUser(user: Owner | Delivery):void {
    if ("owner" in user) {
      console.log(user.owner);
    } else if ("delivery" in user) {
      console.log(user.delivery);
    }
  } 
  */

  function handleUser(user: User): void {
    if (user.name === "owner") {
      console.log(user.owner);
    } else if (user.name === "delivery") {
      console.log(user.delivery);
    }
  }
}
