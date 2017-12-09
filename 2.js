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

function exp(niz){
  var amateur = [];
  var expert = [];
  var newbie = [];
  var pro = [];
  var experience = [];

  for (var i = 0; i < niz.length; i++) {
    if (niz[i].yearsExperience>=1 && niz[i].yearsExperience<5 ) {
   
      newbie.push(niz[i].name);

    }
    else if (niz[i].yearsExperience>=5 && niz[i].yearsExperience<7) {
    
      amateur.push(niz[i].name);
    }
    else if (niz[i].yearsExperience>=7 && niz[i].yearsExperience<11) {
     
      pro.push(niz[i].name);
    }
    else if (niz[i].yearsExperience>=11) {
     
      expert.push(niz[i].name);
    }


  }
  experience.push({AMATEUR : amateur, EXPERT : expert, NEWBIE : newbie, PRO : pro});
  console.log(experience);

}
exp (people);