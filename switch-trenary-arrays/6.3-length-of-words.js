function LenOfWords(arr)
{
  newarr=[];
  for (let i=0;i<arr.length;i++)
  {
    newarr.push(arr[i].length);
  }
  console.log(newarr);
  return newarr;
}