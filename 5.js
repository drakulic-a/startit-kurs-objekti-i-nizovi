//Koliko je elemenata ulaznog niza vece od zadatog broja?
//Funkcija vraca broj
var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
 var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
 var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function numberOFElements (niz, broj){
  var veci = 0;
  for (var i =0; i <niz.length; i++) {
    if (niz[i] > broj) {
      veci += 1;
    }
  } 
  return veci

}

numberOFElements(test_niz1, 5);