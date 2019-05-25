var luke = {
  name: "Luke Skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
}

var han = {
  name: "Han Solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
}

var anakin = {
  name: "Anakin Skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
}

var characters = [luke, han, anakin];

function fatherWasJedi(character) {
  var path = "parents.father.jedi";
  return path.split(".").reduce(function(obj, field) {
    if (obj) {
      return obj[field];
    }

    return false;
  }, character);
}

characters.forEach(function(character) {
  console.log(character.name + "'s father was a Jedi:", fatherWasJedi(character)) 
});
