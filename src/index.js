// complete the function
function prime (x) {
  if(x === 1){
    return false; 
  }else if (x===2){
    return true;
  }else{
    for(let i=2; i<x; i++)
    {
      if (x % i ===0){
        return false;
      }
    }
    return true;
  }
  // code goes here
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
