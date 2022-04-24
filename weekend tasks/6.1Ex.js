function accum(arr)
{
  helparr=[];
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<i+1;j++)
    {
      helparr.push(arr[i]);
    }
    helparr.push('-');
  }
  helparr.pop();
    return helparr.join('');
}

console.log(accum("ab2csd"));