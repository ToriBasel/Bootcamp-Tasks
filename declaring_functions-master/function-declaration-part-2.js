/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
const welcome=()=> { 'Welcome to Appleseeds Bootcamp!';} //explicit // must have curly braces to contain statment

const power=a=>a*a; //implicit // one line no need for braces or parentheses


// From function expressions to IIFE functions.
const squareRoot =Math.sqrt((a)=>math.sqrt(a));

const randomNumbers = ((a,b)=>Math.random() * (a - b) + b);                                                         
 //wrapped the whole thing with () so it will work as a body
 //then used a,b as parameters then used arrow function as an implicit function
                                                            