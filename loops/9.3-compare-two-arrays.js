const food = ["Noodle","love", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries","love", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];

function check(arr,arr1){
  foodarr=[];
  for (let i=0;i<arr.length;i++)
  {
    for (let j=0;j<arr1.length;j++)
    {
      if(arr[i]===arr1[j])
      {
        foodarr.push(arr[i]);
      }
    }
  }
console.log(foodarr);
  return foodarr;
}
