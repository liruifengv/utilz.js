export interface Params {
  name: string;
  age: number;
}

function sayHello(params: Params): string {
  return 'hello ' + params.name;
}

export { sayHello };
