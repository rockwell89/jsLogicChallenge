/*
    Write a javascript function that takes an array of numbers and a target number. 
    The function should find two different numbers in the array that, 
    when added together, give the target number. 
    For example: function([1,2,3], 4) should return [1,3]
*/

function addends(array, target){
    // loop through each element and with each of those... 
    array.forEach(function(cv, i) {
        // loop again through the rest of elements to...
        for ( let x = 1; x < array.length; x++ ) {
            // check if their sum equals the target
            if( array[i] + array [i + x] === target ){
                // create a new array with those elements
                let targetSum = [array[i], array[i + x]];
                console.log(targetSum);
                return targetSum;
            }
        }
    });
}

let array = [1, 4, 9, 7, 10, 2, 8, 5, 6, 3];
let target = 12;

addends(array, target);