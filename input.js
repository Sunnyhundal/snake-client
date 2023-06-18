let connection;

//Provides user a prompt that they're leaving the game and exits the game
const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("~#~ leaving game ~#~");
    process.exit();
  }
  if(key === 'w'){
    console.log("Move: up");
  }else if (key === 'a'){
    console.log("Move: left");
  }else if (key === 's'){
    console.log("Move: down");
  }else if (key === 'd'){
    console.log("Move: right");
  }
    
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
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