function findUnique(arr){
  if (arr[0]!==arr[1] && arr[0]!==arr[2])
  return arr[0]
  for(let i=1;i<arr.length;i++)
  {
    if (arr[i]!==arr[i+1] && arr[i]!==arr[i-1])
    return arr[i];
  }
}

console.log(findUnique([ 1, 2, 2]));
