function frankenSplice(arr1, arr2, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(arr2[i]);
  }


  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = n; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
