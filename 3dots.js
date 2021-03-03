const age1 = [11,12,13];
const age2 = [15,16,20];
const age3 = [20,30,40];
const allAge = [age1,age2,5,age3];
//after mukhn daoer por
const allAge2 = [...age1,...age2,5,...age3];
console.log(allAge);
console.log(allAge2);

//max
const business = 650;
const minister = 450;
const army = 350;
const maximum = Math.max(business,minister,army);
console.log(maximum);

//array max
const Taka = [650,450,350,250,850]
const huge = Math.max(...Taka);
//If I don't use 3dots then the result will be of the program Nan
console.log(huge);