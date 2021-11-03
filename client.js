// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: TJP');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;