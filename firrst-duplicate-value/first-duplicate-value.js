/**
 * 
 * 
 */

function firstDuplicateValue(array) {
    // Write your code here.
    let returnValue = -1;
    let objectMap = {}
    for (let i = 0; i < array.length; i++) {
        if (!objectMap[array[i]]) {
            objectMap[array[i]] = 1;
        } else {
            returnValue = array[i];
            break;
        }
    }
    return returnValue;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
