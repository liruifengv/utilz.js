interface Params {
  name: string;
  age: number;
}

function sayHello(params: Params): void {
  console.log('hello' + params.name);
}

export { sayHello };
