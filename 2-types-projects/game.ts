{
  /**
   * Let's make a game 🕹
   */

  type Direction = "up" | "down" | "left" | "right";

  type Position = {
    x: number;
    y: number;
  };

  let position = { x: 0, y: 0 };

  /*   
  const move = (direction: Direction): Position | undefined => {
    if (direction === "up") {
      return (position = { x: position.x, y: position.y + 1 });
    } else if (direction === "down") {
      return (position = { x: position.x, y: position.y - 1 });
    } else if (direction === "left") {
      return (position = { x: position.x - 1, y: position.y });
    } else if (direction === "right") {
      return (position = { x: position.x + 1, y: position.y });
    }
  }; 
  */

  const move = (direction: Direction): void => {
    switch (direction) {
      case "up":
        position.y = position.y + 1;
        break;
      case "down":
        position.y = position.y - 1;
        break;
      case "left":
        position.x = position.x - 1;
        break;
      case "right":
        position.x = position.x + 1;
        break;
      default:
        throw new Error(`Unknow direction: ${direction}`);
    }
  };

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
