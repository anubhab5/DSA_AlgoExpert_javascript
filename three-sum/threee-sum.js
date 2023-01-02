/**
 * 
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.
 * 
 * 
  If no three numbers sum up to the target sum, the function should return an
  empty array.
  
   array = [12, 3, 1, 2, -6, 5, -8, 6] ; 
   target sum is 0
   
   output:-
   
   [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 *
 */

function threeNumberSum(arr, targetSum) {
    // Write your code here.

    let finalList = [];
    let sortedArray = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        let rightPointer = i + 1;
        let finalPointer = sortedArray.length - 1;
        
        while (rightPointer < finalPointer) {            
            let sum = sortedArray[i] + sortedArray[rightPointer] + sortedArray[finalPointer];
            if (sum === targetSum) {
                finalList.push([sortedArray[i], sortedArray[rightPointer], sortedArray[finalPointer]]);
                rightPointer++;
            } else if (sum > targetSum) {
                finalPointer--;
            } else {
                rightPointer++;
            }
            console.log('hii', rightPointer);
        }
    }
    return finalList;
}


console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));