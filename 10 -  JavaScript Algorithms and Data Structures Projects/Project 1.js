function palindrome(str) {
  let left;
  let right;

  str = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  str = str.toLowerCase();

  if (str.length % 2 == 0) {
    left = str.length / 2 - 1;
    right = str.length / 2;
  } else {
    left = Math.ceil(str.length / 2) - 1;
    right = Math.ceil(str.length / 2) - 1;
  }

  while (str.charAt(left) && str.charAt(right)) {

    console.log(str.charAt(left) + ' ' + str.charAt(right))

    if (str.charAt(left) != str.charAt(right)) {
      return false;
    }

    left--;
    right++;
  }

  return true;
}

palindrome("eye");
