const arr = [0, 2, -2, 3, 5, 1, 3, 7, 9, 10, -100]

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.splice(0, mid);
  const right = arr.splice(mid);


  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    const [l, r] = [left[0], right[0]];

    if (l < r) result.push(left.shift());
    else result.push(right.shift());
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

console.log(mergeSort(arr))