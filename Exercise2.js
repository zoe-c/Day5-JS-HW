// Write a function called yell that logs out an uppercase version of a string.
// Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.


//pt 1

function yell(x){
  return x.toUpperCase();
}

console.log(yell("hello"));

//output: HELLO





//pt 2

function yell10(x){
  function yell(x){ return x.toUpperCase();} ;
  return yell(x) + yell(x) + yell(x) + yell(x) + yell(x) + yell(x) + yell(x) + yell(x) + yell(x) + yell(x);
}
console.log(yell10("hello"));

//output:HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO
//too literal?...there has to be a better/ more condensed way to do this..
