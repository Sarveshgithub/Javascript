function onload() {
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
    }, ];

    let filterAge = people.filter((person) => person.age > 18);
    console.log(filterAge)
    let arrayAge = people.map((person) => person.name)
    console.log(arrayAge)
    let totalAge = people.reduce((sum,person) => {
        return sum+person.age;
    },0)
    console.log(totalAge)
}
onload();