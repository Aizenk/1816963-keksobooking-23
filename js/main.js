function getRandomInt(min, max) {
  if(min>=max){
    console.error('min cannot be greater than max');
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10,20));

function getRandomFloat(min, max, dec) {
  if(min>=max){
    console.error('min cannot be greater than max');
    return false;
  }
  let multiplier = Math.pow(10, dec);
  return Math.floor((Math.random() * (max - min + 1) + min) * multiplier)/multiplier;
}

console.log(getRandomFloat(25,50, 4));

/* Вызов из функции getRandomFloat
function getRandomInt2(min, max, dec) {
return getRandomFloat (min, max, 0)
}

console.log(getRandomInt2(25,50, 0));
*/
