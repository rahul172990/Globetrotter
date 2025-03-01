// function getRandomOptions(arr, correctCity) {
//   let randomOptions = [];
//   let usedIndexes = new Set();

//   let correctCityIndex = Math.floor(Math.random() * 4);

//   while (randomOptions.length < 3) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     if (!usedIndexes.has(randomIndex)) {
//       usedIndexes.add(randomIndex);
//       randomOptions.push(arr[randomIndex]);
//     }
//   }

//   randomOptions.splice(correctCityIndex, 0, correctCity);

//   return randomOptions;
// }

function getRandomOptions(arr, correctCity) {
  let randomOptions = [];
  let usedIndexes = new Set();

  let filteredArr = arr.filter((city) => city !== correctCity);

  while (randomOptions.length < 3) {
    let randomIndex = Math.floor(Math.random() * filteredArr.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      randomOptions.push(filteredArr[randomIndex]);
    }
  }

  let correctCityIndex = Math.floor(Math.random() * 4);
  randomOptions.splice(correctCityIndex, 0, correctCity);

  return randomOptions;
}

export { getRandomOptions };
