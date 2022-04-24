function Maskify(arr)
{
  helparr=[];
  for (let i=0;i<arr.length-4;i++)
  {
    helparr.push('#');
  }
  for(let k=arr.length-4;k<arr.length;k++)
  {
    helparr.push(arr[k]);
  }
  return helparr.join('');
}
console.log(Maskify("n3sxv645hs32c"));
