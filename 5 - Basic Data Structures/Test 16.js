let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  if (foods[scannedItem]) {
    return foods[scannedItem];
  } else {
    return 0;
  }
}

console.log(checkInventory("apples"));
