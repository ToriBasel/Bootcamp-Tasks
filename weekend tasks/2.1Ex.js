function sumOfLowest(arr)
{
  let min1=arr[0];
  let min2=arr[0];
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]<min1)
    min1=arr[i]
  }
 
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]<min2 && arr[i]!==min1)
    min2=arr[i]
  }
  console.log(min2+min1);
  return min2+min1;
}
sumOfLowest( [19,10, 42, 2, 77]);