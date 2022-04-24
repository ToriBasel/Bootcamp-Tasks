function toWeirdCase(arr)
{
  helparr=[];
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i].charCodeAt()>=65 && arr[i].charCodeAt()<=91)
    
    helparr.push(arr[i].toLowerCase());
  else
  helparr.push(arr[i].toUpperCase());
  }
return helparr.join('');
}


console.log(toWeirdCase("TeSTooOoZ"));