//Dobili smo sirove podatke i zaduzenje da izvucemo odredjenu statistiku. napraviti novi objekat koji ce da sadryi br yaposlenih u svakom dept.



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
  }
];


function brZaposlenih (niz){
  var zaposleniIT = 0;
  var zaposleniEng = 0;
  var zaposleniMng = 0;
  var zaposleni = [];
  for (var i = 0; i < niz.length; i++) {

    if (niz[i].department === 'IT') {
      zaposleniIT += 1;
      

    }
    else if (niz[i].department === 'Engineering'){
      zaposleniEng += 1;
     
    }
    else{
      zaposleniMng += 1;
    }


    
  }

  zaposleni.push({IT: zaposleniIT, Engineering: zaposleniEng, Management: zaposleniMng});
  console.log(zaposleni);



}

brZaposlenih (people);

