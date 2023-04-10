import { sayHello, Params } from './hello';

describe('hello module', () => {
  test('测试 sayHello', () => {
    const user: Params = {
      name: 'lirf',
      age: 18,
    };
    const output = sayHello(user);
    expect(output).toBe('hello lirf');
  });
});
