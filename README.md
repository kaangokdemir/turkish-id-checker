# Turkish National ID Checker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm package](https://img.shields.io/npm/v/turkish-id-checker.svg)](https://www.npmjs.org/package/turkish-id-checker) [![downloads](https://img.shields.io/npm/dt/turkish-id-checker.svg)](https://www.npmjs.com/package/turkish-id-checker) [![size](https://img.shields.io/bundlephobia/minzip/turkish-id-checker)](https://www.npmjs.com/package/turkish-id-checker)

This is a simple Turkish National Id Checking package which created for developers to use in their form elements or any spesific usage. 


## Installation

```
npm i turkish-id-checker
```

## Usage

```javascript
let checkId = require('turkish-id-checker')

// Parameter should be a String or a Number
checkId('15973515680') // Returns an Object with status and display keys in it.
checkId('15973515680').status // Returns true
checkId(15973515680).display // Returns 'This is a valid Turkish National ID'
```

## Live Demo

Visit [Live Demo](https://id-checker.netlify.com/)

## Testing

There are some unit tests in `/tests/idCheck.spec.js` which written with Jest. Should `npm install jest` to your project if you want to run those tests.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## TODO

- Add a random valid ID generator too.

## Contributors

Kaan Gökdemir - Author ([@kaangokdemir](https://twitter.com/kaangokdemir)) - [kaangokdemir.com](https://kaangokdemir.com) 

## License

ISC
