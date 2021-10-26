promise monofill
=
This module exports native Promise. Always.
If it doesn't exist it throws an exception.

Installation
------------
```sh
npm install promise-monofill --save
```

Usage
-----
```js
var P = require('promise-monofill');
P.resolve(123).then(console.log);
```

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-promise-monofill/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

