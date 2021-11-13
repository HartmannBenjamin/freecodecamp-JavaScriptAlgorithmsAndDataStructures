const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  arr.forEach((arrElem) => {
    failureItems.push(`<li class="text-warning">${arrElem}</li>`);
  });

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
