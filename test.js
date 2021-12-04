function map(tab, func) {
  let newTab = [];

  for (let i = 0; i < tab.length; i++) {
    newTab[i] = func(tab[i]);
  }

  return newTab;
}

map([1, 2, 3, 4, 5], (elem) => { return elem+1 })

  
