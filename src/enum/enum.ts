export interface EnumElement {
  key: string;
  value: number;
}

export type Props = {
  [key: string]: EnumElement;
};

interface EnumClass {
  readonly __props: Props;
  get(value: number): EnumElement;
  getArray(): EnumElement[];
  getObject(): Props;
}

export class Enum implements EnumClass {
  readonly __props: Props;

  constructor(params: EnumElement[]) {
    this.__props = {} as Props;

    if (params.length) {
      params.forEach((element: EnumElement) => {
        if (element.key && element.value) {
          this[element.key] = element.value;
          this.__props[element.value] = element;
        } else {
          console.error(`${element} Enum is missing the required key or value`);
        }
      });
    } else {
      console.error(`params is empty`);
    }
  }

  get(value: number): EnumElement {
    return this.__props[value];
  }

  getArray(): EnumElement[] {
    const arr: EnumElement[] = [];
    for (const key in this.__props) {
      if (Object.prototype.hasOwnProperty.call(this.__props, key)) {
        arr.push(this.__props[key]);
      }
    }
    return arr;
  }

  getObject(): Props {
    return this.__props;
  }
}
