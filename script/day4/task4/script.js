function findMostFrequent(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentElement;

  for (let num of arr) {
    // If num is already in frequencyMap, its value is incremented by 1.
    // If num is not in frequencyMap, it initializes the count at 0 and then adds 1.
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxCount) {
          maxCount = frequencyMap[num];
          mostFrequentElement = num;
      }
  }

  return mostFrequentElement;
}

const arr = [1, 2, 2, 3, 3, 3];
console.log(findMostFrequent(arr));
