const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on("connect", () => {
console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: ASH");
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