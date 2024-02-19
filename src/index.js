// function longestPrefixSuffix(str) {
//   var n = str.length;
//   if (n < 2) {
//     return 0;
//   }
//   var i = 0;
//   var mid = Math.ceil(n / 2);
//   // n%2!=0?mid = mid+1 : mid
//   while (mid < n) {
//     if (str[i] == str[mid]) {
//       ++mid;
//       ++i;
//     } else {
//       mid++;
//       i = 0;
//     }
//   }
//   // console.log("res==",i)
//   return i;
// }

// longestPrefixSuffix("dbcfglabc");

//not for overlapping element

//v2

const sample = 'aabrakadbra'

const getLongPreSuf = str => {
	let initial = 0 , mid  = Math.floor(str.length/2)
  let j = mid , res = ''
  
  while(j<str.length){
  	if(str[initial] == str[j]){
    	res += str[j]
      j++;initial++;
    }else{
    	res='', initial = 0;
      j++;
    }
  }
  
  return res;
}


console.log(getLongPreSuf(sample))

