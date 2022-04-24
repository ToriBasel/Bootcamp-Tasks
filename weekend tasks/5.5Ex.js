function AbbTwoWords(arr)
{
  str=[];
  str.push(arr[0]);
  str.push('.');
  str.push(arr[arr.indexOf(' ')+1]);

  return str.join('');
}


console.log(AbbTwoWords("Hi Bro"));
