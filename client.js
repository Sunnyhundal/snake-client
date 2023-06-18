// Imports net module to import node tcp server api
const net = require("net");
//Imports constants for network connection and player name
const { IP, PORT, NAME} = require('./constants');

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
// Sends player name to server
  conn.on("connect", () => {
    conn.write(NAME);
  });


  //for the event data passes data to console log
  conn.on("data", (data) => {
    console.log(`Messege from server: `, data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
  
};

module.exports = { connect };