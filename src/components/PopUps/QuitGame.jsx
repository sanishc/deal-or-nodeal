import PopUp from "./PopUp";

const QuitGame = ({ buttons, onResume, onQuit, display }) => {
  if (buttons) {
    return (
      <PopUp
        button1={{ name: "No", onClick: onResume }}
        button2={{ name: "Yes", onClick: onQuit }}
        show={display}
      >
        <h5>Are You Sure To Quit?</h5>
      </PopUp>
    );
  } else {
    return (
      <PopUp show={display} button1={{ name: "Exit", onClick: onQuit }}>
        <h5>Opponent Quit The Game. Game Ended</h5>
      </PopUp>
    );
  }
};

export default QuitGame;
