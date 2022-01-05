# Typescript

## ts-node

- ts-node는 Node.js용 TypeScript 실행 엔진 및 REPL입니다.
- 기본적으로 node는 타입스크립트 코드를 읽고 실행할 수 없는데, ts-node를 이용하면 타입스크립트 코드를 내부적으로 노드가 읽을 수 있는 자바스크립트로 변환해서 실행한다.
- npm i ts-node
- https://www.npmjs.com/package/ts-node

## type alias

- 타입 앨리어스는 새로운 타입을 정의한다. 타입으로 사용할 수 있다는 점에서 타입 앨리어스는 인터페이스와 유사하다.
- 하지만 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.
- 인터페이스는 extends 또는 implements될 수 있지만 타입 앨리어스는 extends 또는 implements될 수 없다.
- 즉, 상속을 통해 확장이 필요하다면 타입 앨리어스보다는 인터페이스가 유리하다.
- 하지만 인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야한다면 타입 앨리어스를 사용한는 편이 유리하다.
