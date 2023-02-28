function bubbleSort(arrayTest) {
  const len = arrayTest.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arrayTest[j] > arrayTest[j + 1]) {
        let temp = arrayTest[j];
        arrayTest[j] = arrayTest[j + 1];
        arrayTest[j + 1] = temp;
      }
    }
  }
  return arrayTest;
}

console.log(bubbleSort([3,6,2,5,-75,4,1]));