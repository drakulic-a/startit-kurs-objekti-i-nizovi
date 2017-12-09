//3.
var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
]

function nameOfEmpl (niz){
  var nameEmpl = [];
  for (var i = 0; i < niz.length; i++) {
    nameEmpl.push(niz[i].name);


  }
  console.log(nameEmpl);

}
nameOfEmpl(people);
