const { UP, LEFT, DOWN, RIGHT, MSGONE, MSGTWO} = require('./constants');

let connection;


//Provides user a prompt that they're leaving the game and exits the game
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("~#~ leaving game ~#~");
    process.exit();
  }
  if (key === 'w') {
    connection.write(UP);
  } else if (key === 's') {
    connection.write(DOWN);
  } else if (key === 'a') {
    connection.write(LEFT);
  } else if (key === 'd') {
    connection.write(RIGHT);
  } else if (key === 'r') {
    connection.write(MSGONE);
  } else if (key === 'g') {
    connection.write(MSGTWO);
  }
    
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
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