module.exports = (io, socket) => {
  const selectTrading = (room, index) => {
    socket.to(room).emit("tradingBoxSelected", index);
  };

  const openBriefCase = (room, index) => {
    socket.to(room).emit("openedBox", index);
  };

  const sendOffer = (room, amount) => {
    socket.to(room).emit("offerPlaced", amount);
  };

  const acceptOffer = (room, amount) => {
    socket.to(room).emit("offerAccepted", amount);
  };

  const declineOffer = (room) => {
    socket.to(room).emit("offerDeclined");
  };

  socket.on("box:selected", selectTrading);
  socket.on("box:opened", openBriefCase);
  socket.on("Offer", sendOffer);
  socket.on("game:deal", acceptOffer);
  socket.on("game:nodeal", declineOffer);
};
