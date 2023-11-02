var express = require("express");
var app = express();

//Static resources server
app.use(express.static(__dirname + "/www"));

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("Server running at port %s", port);
});

var io = require("socket.io")(server);

// Connection events

var numUsers = 0;

io.on("connection", function (socket) {
  console.log("User connected");
  numUsers += 1;
  console.log("There are now " + numUsers + " users online");
  let id = socket.id;

  socket.on("cinput", (data) => {
    data.id = id;
    socket.emit("sinput", data);
    socket.broadcast.emit("sinput", data);
  });
});