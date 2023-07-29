function hasTargetSum(array, target) {
  let result
  // Write your algorithm here
  for (let i=0; i<array.length; i++) {
     
    for(let j=0; j<array.length; j++){
     
      if([i] !== [j]){
       
          
        if((array[j] + array[i]) == target)
          {
            // console.log(array[i], array[j]);
            return true
          } 
      }
    }
  }
return false;
}
console.log(hasTargetSum([1,2,5],4))

/* 
  Write the Big O time complexity of your function here
O(n^2) time complexity
  */

/* 
[1,2,3,4,5,6] => 11
1+2=3
1+3=4
1+4=5
=>  Add your pseudocode here
  loops through an array of integers
    cross checks wach item against the other adding
    if total === total2
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
  a function that takes an array of integers and a target integer. 
  Should return true 
  if any two numbers in the arrray adds up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("expecting: true");
  console.log("=>", hasTargetSum([1,4,5,6,6], 12))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
