// Setup
const lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank",
}

function phoneticLookup(val) {
  let result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
