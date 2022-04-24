// //block 1:
// function funcA()
//  {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// funcA();
// /*
// undefined
// 2

// line 4 will print undefined bcz variable a is not declared
// till line 6 but because its var the interpter can declare it
// but not give it a value so its decalred without a value therefor 
// its undefined 

// and calling function foo() will return 2 becuase functions
// are listed on top of the whole block
// */

//block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log("line 36",obj.prop.getFullName());//'Aurelio De Rosa' getfullname function will reach the nearest fullname in lexical scope
var test = obj.prop.getFullName; 
console.log(test());
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB(); // we get 1 as return value of a=0 then a+=1
console.log(typeof a); //undefined error a is declared inside funcB() we cant accest it from outside