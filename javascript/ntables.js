/*
Create a function that takes a number n and 
returns the first 10 multiples of n with 1 added to it, 
separated by commas.
nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"
*/
function nTablesPlusOne(n) {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      table += (n * i + 1) + ',';
    } else {
      table += (n * i + 1);
    }
  }
  return table;
}

console.log(nTablesPlusOne(7));
