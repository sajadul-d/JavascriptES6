const students =[
    {id: 21, name:'sajid'},
    {id: 31, name:'himel'},
    {id: 41, name:'shamim'},
    {id: 51, name:'shahriar'}

];
const names = students.map(s =>s.name);
console.log(names);
const ids =students.map(s=>s.id);
console.log(ids);
const bigger = students.filter(s=>s.id>40);
console.log(bigger);
const biggerOne = students.find(s=>s.id>40);
console.log(biggerOne);