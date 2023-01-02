

function moveElementToEnd(array, toMove) {
    // Write your code here.
    let firstOccurenceIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toMove && firstOccurenceIndex === -1) {
            firstOccurenceIndex = i;
        } else if (array[i] !== toMove && firstOccurenceIndex !== -1) {
            array[firstOccurenceIndex] = array[i];
            array[i] = toMove;
            ++firstOccurenceIndex;
        }
    }
    return array;
}

console.log(moveElementToEnd([1, 2, 4, 5, 3], 3));