// const hubby = "Elyes kobra";
// console.log(hubby);
// const numbers =[12,45];
// numbers[1]=88;
// numbers.push(12);
// console.log(numbers);

//Default parameter of a function
function add(num1,num2=0)
{
    //num2 = num2 || 0;
    return num1 + num2;
}

const  result= add(15);
console.log("Total=",result);

//string con with ES6
const FirstName = "Sajadul";
const SecondName = "Islam";
const fullName = `${FirstName} ${SecondName} ${4+5+6} ${4*5*6} is a good boy`;
console.log(fullName);
//Multiline
const multiLine =`I love you
No.I don't miss you
dorkar nai belly road a jaoer jonno`;
console.log(multiLine);


//arrow function vs others function comparison
//i
// function intDouble(num){
//     return num*2;
// }
// const intDouble = function(x){
//     return x*2;
// }
//arrow function 
const add =(a,b) => a + b;
const result = add(15,20);
console.log(result);  