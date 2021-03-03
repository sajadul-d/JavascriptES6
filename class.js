class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school = "KM KInder Garden";
    }
}

const s1 = new Student(12,"shuvo");
const s2 = new Student(22,"mahiya");
console.log(s1.name,s2.name);
console.log(s1.school+ "  " +s2.school);