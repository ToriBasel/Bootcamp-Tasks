//{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
console.log(today.toDateString())
console.log(today.toUTCString());
console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));
console.log(new Date().toLocaleString('en-us', {  month: 'long' }));

function myDate(){
  today=new Date();
  day=new Date().toLocaleString('en-us', {  weekday: 'long' })
  return `Today is ${new Date().toLocaleString('en-us', {  weekday: 'long' })} the ${new Date().toLocaleString('en-us', {  day: 'numeric' })} of ${new Date().toLocaleString('en-us', {  month: 'long' })} 2022`
}

console.log(myDate());