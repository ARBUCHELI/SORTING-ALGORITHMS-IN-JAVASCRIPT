function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let index = i;
      let min = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (min > array[j]) {
          min = array[j];
          index = j;
        }
      }
      let temp = array[i];
      array[i] = min;
      array[index] = temp;
    }
    return array;
}

console.log(selectionSort([9, 15, 2, 44, -1, 36, 1]));