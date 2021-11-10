const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  let result = strokes - par;

  if (strokes == 1) {
    return names[0];
  } else if (result == 0) {
    return names[3];
  } else if (result == -1) {
    return names[2];
  } else if (result <= -2) {
    return names[1];
  } else if (result <= -2) {
    return names[1];
  } else if (result == 1) {
    return names[4];
  } else if (result == 2) {
    return names[5];
  } else {
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
