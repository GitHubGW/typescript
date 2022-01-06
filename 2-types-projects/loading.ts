{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (resourceLoadState: ResourceLoadState): void => {
    if (resourceLoadState.state === "loading") {
      console.log("👀 loading...");
    } else if (resourceLoadState.state === "success") {
      console.log("😃 loaded");
    } else if (resourceLoadState.state === "fail") {
      console.log("😱 no network");
    } else {
      throw new Error(`Unknown resourceLoadState: ${resourceLoadState}`);
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
