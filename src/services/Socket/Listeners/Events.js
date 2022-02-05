module.exports = (io, socket) => {
  const actionPause = (room) => {
    socket.to(room).emit("gamePaused");
  };

  const actionResume = (room) => {
    socket.to(room).emit("gameResumed");
  };

  const actionQuit = (room) => {
    socket.to(room).emit("gameEnded");
    socket.leave(room);
    socket.disconnect(true);
  };

  const levelCompleted = (room) => {
    socket.to(room).emit("completedLevel");
  };

  const GameTerminated = (room) => {
    socket.to(room).emit("tradeBoxWon");
  };

  socket.on("Level Complete", levelCompleted);
  socket.on("action:pause", actionPause);
  socket.on("action:resume", actionResume);
  socket.on("action:quit", actionQuit);
  socket.on("game:end", GameTerminated);
};
