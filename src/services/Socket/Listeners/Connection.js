const { v4: uuidv4 } = require("uuid");
const shuffleArray = require("../../../utils/ShuffleArray");

module.exports = (io, socket) => {
  const moneyTree = {
    left: [1, 5, 10, 25, 50, 75, 100, 150, 200, 300, 400, 500, 750],
    right: [
      1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000,
      500000, 750000, 1000000,
    ],
  };

  const createRoom = () => {
    const room = uuidv4();
    socket.emit("newRoom", room);
    socket.join(room);
  };

  const joinRoom = (room) => {
    const gameRoom = io.sockets.adapter.rooms.get(room);
    if (gameRoom && !gameRoom.has(socket.id)) {
      socket.join(room);
      const boxes = shuffleArray([...moneyTree.left, ...moneyTree.right]);
      io.to(room).emit("startGame", { boxes: boxes, moneyTree: moneyTree });
    }
  };

  socket.on("NewGame", createRoom);
  socket.on("JoinGame", joinRoom);
};
