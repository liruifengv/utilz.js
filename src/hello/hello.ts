interface Params {
  name: string;
  age: number;
}

function sayHello(params: Params): void {
  console.log('hello' + params.name);
}

const a = 1;

export { sayHello, a };