/*
    Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
    make a function that organizes these into individual array that is ordered. 
    For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
    Bonus: Make it so it organizes strings differently from number types. 
    i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function organizeArray(){
    //sort array elements into numeric order
   const sortArray = array.sort((a,b) => a-b);
   
   // create a counter to find out how many are the same and where to slice it into it's own nested array
   let counter = 0;
   // loop through sorted array to find each group of the same elements
   sortArray.forEach(function(cv, i){
       // 
       if(sortArray[i] === sortArray[i + 1]){
           counter++;
       }
       /* first 'if' will skip the last element because the one to the right is not the same
          to fix, check to see if the element to the left is the same */
       else if (sortArray[i] !== sortArray[i + 1] && sortArray[i] === sortArray[i - 1]){
            // use the counter to slice the array and place it in the proper index numerically
            sortArray[i - counter] = sortArray.slice(i - counter, i + 1);
            // reset counter to check for the next group of the same elements
            counter = 0;
       }
   });

   /* the above forEach created our nested arrays but left the duplicated elements
      to fix, loop through again and delete those elements */
    sortArray.forEach(function(cv, i) {
        // check to see if the first index of the nested array is the same as the element to the right of the nested array
        while (sortArray[i][0] && sortArray[i][0] === sortArray[i + 1]) {
            // delete the duplicates from the first level array
            sortArray.splice(i + 1, 1);
        }
    });
    return sortArray;
}

organizeArray();