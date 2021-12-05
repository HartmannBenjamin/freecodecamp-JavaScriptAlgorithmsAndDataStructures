function uniteUnique(arr, ... arrs) {
  arrs.forEach((e) => {
    e.forEach((elem) => {
      if (!arr.includes(elem)) {
        arr.push(elem);
      }
    })
  });

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
