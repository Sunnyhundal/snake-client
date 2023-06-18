//Provides user a prompt that they're leaving the game and exits the game
const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("~#~ leaving game ~#~");
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};