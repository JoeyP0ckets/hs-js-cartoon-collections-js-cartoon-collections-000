function dwarfRollCall(dwarves) {
  var newDwarfArray = [] ;
  for ( var i = 0; i < dwarves.length; i++) {
  var position = i + 1;
  var dwarf = dwarves[i];
  newDwarfArray += `${position}. ${dwarf} `;  
  }
return newDwarfArray;
  }

function summonCaptainPlanet(planeteerCalls) {
var shoutedArray = [];
 for ( var i = 0; i < planeteerCalls.length; i++) {
  var newCalls = planeteerCalls[i].toUpperCase();
   newCalls += "!";
  shoutedArray.push(newCalls);
  
   }
  return shoutedArray;
}

function longPlaneteerCalls(words) {
  for ( var i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
    return true;
  } else if (words[i].length <= 4) {
    return false;
  }
  }
}

function findTheCheese (foods) {
for ( var i = 0; i < foods.length; i++) {
  if (foods[i] === "cheddar") {
    return foods[i];
  }
  if (foods[i] ==="gouda") {
    return foods[i];
  }
  if (foods[i] === "camembert") {
    return foods[i];
  } 
  }

    return "no cheese!";
}