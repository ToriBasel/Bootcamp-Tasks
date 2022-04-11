const arr = [1,7,3,0,-5,7,3,9]
let i;
for(i=0;i<arr.length;i++)
{
  console.log(arr[i]);
}

function arrayLength(arr){
  let j=0;
  console.log(arr[j]);
  while (typeof arr[j]!=="undefined")
{
  j++;
}
  return j;
  }

  console.log(arrayLength(arr),"this is array");

  const arraySum = (arr) => {
  let sum = 0;
    for (let i = 0; i < arrayLength(arr); i++) {
      sum += arr[i];
    }
  
    return sum;
  };

const arrayMulti = (arr) => {
  let multy = 1;
  for (let i = 0; i < arrayLength(arr); i++) {
    multy *= arr[i];
    }
  
    return multy;
    };