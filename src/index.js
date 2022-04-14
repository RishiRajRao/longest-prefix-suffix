function longestPrefixSuffix(str) {
  var n = str.length;
  if (n < 2) {
    return 0;
  }
  var i = 0;
  var mid = Math.ceil(n / 2);
  // n%2!=0?mid = mid+1 : mid
  while (mid < n) {
    if (str[i] == str[mid]) {
      ++mid;
      ++i;
    } else {
      mid++;
      i = 0;
    }
  }
  // console.log("res==",i)
  return i;
}

longestPrefixSuffix("dbcfglabc");

//not for overlapping element
