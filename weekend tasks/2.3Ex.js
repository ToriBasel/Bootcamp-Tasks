function findNextSquare(value){
  if (Math.sqrt(value)!==Math.floor(Math.sqrt(value)))
  {
    return -1;
  }
  for (i=value+1;true;i++)
  {
    if (Math.sqrt(i)===Math.floor(Math.sqrt(i)))
    {
      return i;
    }
  }
}
console.log(findNextSquare(144));