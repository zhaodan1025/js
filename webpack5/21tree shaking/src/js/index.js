import '../css/index.css';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(mul(2, 3));
// eslint-disable-next-line
sum(console.log(1, 2, 3, 4));
