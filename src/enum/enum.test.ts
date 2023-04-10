import { Enum, EnumElement, Props } from './enum';

describe('Enum module', () => {
  test('test Enum get value by key', () => {
    const arr: EnumElement[] = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
      { key: 'C', value: 3 },
    ];

    const enumObj = new Enum(arr);
    expect(enumObj['A']).toBe(1);
    expect(enumObj['B']).toBe(2);
    expect(enumObj['C']).toBe(3);
  });

  test('test Enum get EnumElement by value', () => {
    const arr: EnumElement[] = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
      { key: 'C', value: 3 },
    ];

    const enumObj = new Enum(arr);
    expect(enumObj.get(1)).toStrictEqual({ key: 'A', value: 1 });
    expect(enumObj.get(2)).toStrictEqual({ key: 'B', value: 2 });
    expect(enumObj.get(3)).toStrictEqual({ key: 'C', value: 3 });
  });

  test('test Enum getArray', () => {
    const arr: EnumElement[] = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
      { key: 'C', value: 3 },
    ];

    const enumObj = new Enum(arr);
    expect(enumObj.getArray()).toStrictEqual(arr);
  });

  test('test Enum getObject', () => {
    const arr: EnumElement[] = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
      { key: 'C', value: 3 },
    ];

    const enumObj = new Enum(arr);
    const output: Props = { 1: { key: 'A', value: 1 }, '2': { key: 'B', value: 2 }, '3': { key: 'C', value: 3 } };
    expect(enumObj.getObject()).toStrictEqual(output);
  });
});
