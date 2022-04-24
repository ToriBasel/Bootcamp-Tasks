//a
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsortasc=foods.sort();
const foodsortdec=foods.reverse();

//b
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const foodcapital=foodsWithUpperCase.sort();
const foodcapital2=foodsWithUpperCase.reverse();

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const wordslongest=words.sort((a,b)=>{
  if (a.length>b.length)
  return -1;
  else if(b.length>b.length)
  return 1;
})
