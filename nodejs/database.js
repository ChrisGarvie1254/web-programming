var http = require("http");

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
