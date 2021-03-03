const numbers = [1,2,3,4,5,6,7,8];

//splice is one kind of function which remove the elements from the main array
const removed = numbers.splice(2,5)//index 2 thakha start hoba and 5 ta element
//k remove korba main array thakha
console.log(removed);
//when we use splice main array will be changed
console.log(numbers);