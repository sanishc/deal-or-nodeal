import PopUp from "./PopUp";

const PauseGame = ({ buttons, onResume, onQuit, display }) => {
  if (buttons) {
    return (
      <PopUp
        button1={{ name: "Resume", onClick: onResume }}
        button2={{ name: "Quit", onClick: onQuit }}
        show={display}
      >
        <h5>Game Paused</h5>
      </PopUp>
    );
  } else {
    return (
      <PopUp show={display}>
        <h5>Game Paused By Opponent</h5>
      </PopUp>
    );
  }
};

export default PauseGame;
