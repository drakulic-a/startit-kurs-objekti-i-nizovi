// var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
// var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
// var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];
//Napravi novi niz, koji se dobija mnozenjem parnih elemenata sa3,a neparnih sa 4, funkcija vraca niz.
var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
 var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
 var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function multiplyEvenAndOdds (array){
  var newArray=[];

  for (var i = 0; i< array.length; i++) {
    if (array[i]%2==0) {
      newArray.push(array[i]*3);

    }
    else{
      newArray.push(array[i]*4);
    }
    
  }
  
  return newArray
  

}
multiplyEvenAndOdds(test_niz1);