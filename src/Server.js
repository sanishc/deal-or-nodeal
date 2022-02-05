const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

const connectionHandlers = require("./services/Socket/Listeners/Connection");
const actionHandlers = require("./services/Socket/Listeners/Actions");
const eventHandlers = require("./services/Socket/Listeners/Events");

const registerListeners = (socket) => {
  connectionHandlers(io, socket);
  actionHandlers(io, socket);
  eventHandlers(io, socket);
};

io.on("connection", registerListeners);

httpServer.listen(4000, () => {
  console.log("listening on *:4000");
});
