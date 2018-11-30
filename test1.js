var myConsole = {
  log: function(msg) {
    console.log('My console says: ' + msg);
  }
}

var person = "Majd";

if (person == "Majd") {
  myConsole.log(person);
} else {
  myConsole.log("Wrong Person");
}
