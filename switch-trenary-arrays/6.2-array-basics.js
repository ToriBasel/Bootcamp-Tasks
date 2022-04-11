
const people = ['Greg', 'Mary', 'Devon', 'James'];
const people2 = ['Greg', 'Mary', 'Devon', 'James'];

// 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2
people.shift();

// 3
people.pop();

// 4
people.unshift('Matt');

// 5
people.push('Broz');

// 6
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === 'Mary') break;
}

// 7

const copy = people.splice(2);
console.log(copy);

// 8
console.log(people.indexOf('Mary'));

// 9
console.log(people.indexOf('Foo'));

// 10
people2.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people2);

// 11
const withBob = people2.slice();
withBob.unshift('Bob');
console.log(withBob);