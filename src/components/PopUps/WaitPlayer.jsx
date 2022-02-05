import PopUp from "./PopUp";

const WaitPlayer = ({ room, onClose }) => {
  return (
    <PopUp button1={{ name: "Close", onClick: onClose }}>
      <h1 className="text-xl font-bold">Waiting For Second Player</h1>
      <p className="text-center mt-6 mb-1 text-lg">Share Your Code</p>
      <p>{room}</p>
    </PopUp>
  );
};

export default WaitPlayer;
