function ToCamelCase(arr)
{
  helparr=[];
  for (let i=0;i<arr.length;i++)
  {
    if(arr[i]!=="-")
    {
      helparr.push(arr[i]);
    }
    else{
    helparr.push(arr[i+1].toUpperCase());
    i++;
    }
  }
  return helparr.join('');
}

console.log(ToCamelCase("the-stealth-warrior"));