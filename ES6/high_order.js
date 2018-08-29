const people = [{
    name: 'Sarvesh',
    age: 22
}, {
    name: 'Ravi',
    age: 19
}, {
    name: 'Rishabh',
    age: 20
}, {
    name: 'Anil',
    age: 18
}];

function onload() {
  let filterAge = people.filter(val => { 
      return val.age >= 19;
  }
  )
  //console.log(filterAge);

  let allAges = people.map(val => {
      return val.name;
  })
 // console.log(allAges);

 let totalAges = people.reduce((sum,val) => {
     return sum+val.age;
 },0)
 console.log(totalAges);
}
onload();