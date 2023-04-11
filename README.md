# utilz.js

![version](https://img.shields.io/npm/v/utilz.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/liruifengv/utilz.js/pulls)
![license](https://img.shields.io/npm/l/utilz.js)
![size](https://img.shields.io/bundlephobia/minzip/utilz.js)

Some utilities for JavaScript.

## Usage

```bash
npm install utilz.js
```

## Features

### Enum

Enum class is an enumeration class that can be used to define a set of constants. In order to use enumeration in native JS.

```js
import { Enum } from 'utilz.js';

// new a Enum instance
const StatusEnum = new Enum([
  { key: 'PENDING', value: 1 },
  { key: 'FULFILL', value: 2 },
  { key: 'REJECT', value: 3 },
]);

// get value by key
StatusEnum['PENDING']; // 1
StatusEnum['FULFILL']; // 2
StatusEnum['REJECT']; // 3

// get EnumElement by value
StatusEnum.get(1); // { key: 'PENDING', value: 1 }
StatusEnum.get(2); // { key: 'FULFILL', value: 2 }
StatusEnum.get(3); // { key: 'REJECT', value: 3 }

// get all keys
StatusEnum.getArray();
/*
 ** return:
[
  { key: 'PENDING', value: 1 },
  { key: 'FULFILL', value: 2 },
  { key: 'REJECT', value: 3 },
]
*/

// get all values
StatusEnum.getObject();
/*
 ** return:
{
  1: { key: 'PENDING', value: 1 },
  2: { key: 'FULFILL', value: 2 },
  3: { key: 'REJECT', value: 3 },
}
*/
```

### fetch

- TODO

## License

utilz.js is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
