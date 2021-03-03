//using for loop
const numbers = [3,4,5,6,7,8,9];
const output = [];

for(let i=0;i<numbers.length;i++){
    const elements = numbers[i];
    const result = elements * elements;
    output.push(result);

}
console.log(output);
//using map and traditiona function
const re = numbers.map(function(element,index,array){
    //console.log(index,element);
    return element * element;
})
 console.log(re);

//using mam arrow function 
const rem = numbers.map(x=>x*x);
console.log("map=",rem);