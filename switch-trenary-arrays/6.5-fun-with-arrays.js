const arr = new Array(100);
console.log(arr);
arr.fill({ data: 0 }, 0, 100);
arr[0].data = 2;
console.log(arr[1]);

// 2
const arr2 = Array.from(arr1, (element, index) => (element = index + 1));
console.log(arr2);

// 3
const obj = {
  name: 'Basil',
  age: 34,
  has_children: true,
};
const arr3 = Object.values(obj);

// 4
const arr4 = ['a', 'b', 'c', 'd'];
const obj2 = Object.assign({}, arr4);

console.log(obj2);

// 5
console.log(`arr1 ${Array.isArray(arr1) ? 'is' : 'is not'} an array`);
console.log(`obj2 ${Array.isArray(obj2) ? 'is' : 'is not'} an array`);

// 6.a
const arr5 = [...arr4];
// 6.b
const arr6 = arr4;

arr6[0] = "Brand new";
