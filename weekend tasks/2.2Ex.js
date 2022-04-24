function binary(binaryarr)
{
  let number=0;
  binaryarr.reverse();
  console.log(binaryarr);
  if (binaryarr[0]===1)
  number++;
  if(binaryarr[1]===1)
  number+=2;

  for(let i=2;i<binaryarr.length;i++)
  {
    if(binaryarr[i]===1)
    number+=2**i;
  }
return number;
}
const arz=binary([1,1,0,1]);
console.log(arz);
