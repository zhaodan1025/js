import $ from 'jquery'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
sum(console.log(1, 2, 3, 4));
console.log($)