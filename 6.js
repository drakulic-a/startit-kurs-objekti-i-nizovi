// Ako je treći argument true treba napraviti novi niz
// od elemenata ulaznog koji su VEĆI ili JEDNAKI od
// zadatog broja. Ako je treći argument false treba 
// napraviti novi niz od elemenata ulaznog koji su
// MANJI od zadatog broja. Funkcija vraća niz
var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
 var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
 var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function filterOutElements(array, limit, direction) {
  var veciJednaki=[];
  var manji=[];
  for (var i = 0; i<array.length ; i++) {
    
  
    if (direction && array[i]>=limit) {
      
      veciJednaki.push(array[i]);

    }
    else if (direction==false && array[i]<limit) {
       manji.push(array[i]);
    }

    
  }
  console.log(veciJednaki);
  console.log(manji);
}
filterOutElements(test_niz1, 5, true)