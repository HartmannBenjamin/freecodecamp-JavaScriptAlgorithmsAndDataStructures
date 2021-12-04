function chunkArrayInGroups(arr, size) {
  let result = [];

  while (arr.length > 0) {
    let temp = [];

    for (let i = 0; i < size; i++) {
      if (arr[i] != null) {
        temp.push(arr[i]);
      }
    }
    console.log(temp);

    result.push(temp);
    arr.splice(0, size);
  }

  console.log(result);

  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
