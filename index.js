// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length ; i++) {
    newArray.push (musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = factsArray.slice(i,1) + "!!!";
    i++;
  }
  return johnLennonFacts;
}