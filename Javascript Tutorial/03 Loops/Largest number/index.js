let arr = [1, 8, 9, 6, 4, 61, 34, 99, 164, 965];

function largest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  console.log(max);
}

largest(arr);
