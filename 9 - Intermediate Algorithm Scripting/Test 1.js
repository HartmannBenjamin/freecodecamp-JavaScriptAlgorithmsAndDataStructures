function sumAll(arr) {
  let bornes = arr.sort((a,b) => a-b);
  let result = 0;

  for (let i = bornes[0]; i <= bornes[1]; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]);
