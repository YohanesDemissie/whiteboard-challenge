function binarySearch(arr, num, l, r) {
  if (arr instanceof Array) {
    num = 3
    l = isNaN(l) ? 0 : l; //left half of binary tree
    r = isNaN(r) ? arr.length - 1 : r; //right half of binary tree
    let mid = l + 1 + Math.round((r - l) / 2 - 1); //middle dividin piont
    console.log(l, r, mid, arr[mid]);
    if (num == arr[mid]) {
      console.log(arr[mid]);
      return mid;
      // console.log(binarySearch[num])

    }

    if (typeof arr[mid] == "undefined" || l == r) {
      //	console.log("not found"); return -1;
    }

    if (num < arr[mid]) {
      //	console.log("take left"); 

      return binarySearch(arr, num, l, r - mid);
    }

    // console.log("take right");
    return binarySearch(arr, num, mid, r);

  }
}
//binarySearch();
console.log(binarySearch([0, 0, 1, 1, 2, 3, 5, 5, 6, 11], 3));










