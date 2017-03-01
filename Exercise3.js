// Write a function called longest that returns the longest of two input strings or arrays.


function longest (a,b){
  var resultLongest = "";
  if (a.length > b.length) {
    resultLongest = a;
  }if (b.length > a.length){
    resultLongest = b;
  }
  return resultLongest;

}
console.log(longest("hi","hello"));
