function pplOnBus(arr)
{
  let onBus=0;
  for (let i=0;i<arr.length;i++)
  {
    onBus+=arr[i][0];
    onBus-=arr[i][1];
  }
  return onBus;
}