const net = require("net");
const { IP, PORT, NAME} = require('./constants');

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write(NAME);
  });


  //for the event data passes data to console log
  conn.on("data", (data) => {
    // code that does something
    console.log(`Messege from server: `, data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  
};

module.exports = { connect };