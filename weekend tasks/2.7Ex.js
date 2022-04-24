function basicOp(opr,num1,numb2)
{
  if(opr==='+')
  return num1+numb2;
  else if (opr==='-')
  return num1-numb2;
  else if (opr==='/')
  return num1/numb2;
  else if (opr==='*')
  return num1*numb2;
}

console.log(basicOp('*',12,2));