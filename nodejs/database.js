var http = require("http");

// Create connection to the database
// Port 3306
const connection = mysql.createConnection({
    // Very secure having the login here!
    host: "sql7.freesqldatabase.com",
    user: "sql7370739",
    password: "nrdE5EPSi5",
    database: "sql7370739"
  });
  
  let out = "";
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected Database!");
    //create a server object:

var app = http.createServer(function (req, res) {
  res.write(htmlcontent); //write a response to the client
  res.end(); //end the response
});

const io = require("socket.io").listen(app, { log: false });
//const io = require("socket.io"); //.listen(app, { log: false });
app.listen(8080);

io.sockets.on("connection", (socket) => {
  let id = socket.id;

  socket.on("mousemove", (data) => {
    data.id = id;
    socket.broadcast.emit("moving", data);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("clientdisconnect", id);
  });
});

connection.query("create table calc(x int, y int);", function (err, result) {
    console.log(result);
    // fail if table is already created
    out += "create table:" + err + "\n";
  });
});
