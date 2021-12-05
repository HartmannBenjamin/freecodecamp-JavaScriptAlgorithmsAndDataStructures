// Only change code below this line
function urlSlug(title) {
  return title.split(" ").filter(n => n.length > 0)
      .map(elem => elem.charAt(0).toLowerCase() + elem.slice(1)).join("-");
}
// Only change code above this line
