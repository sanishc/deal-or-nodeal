import ToggleButton from "../ToggleButton/ToggleButton";

const HeaderView = ({ game, changeTheme }) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center sm:justify-around flex-col sm:flex-row p-5 z-50">
      <h1 className="cursor-pointer text-2xl logo mb-2 sm:mb-0">
        Deal OR NoDeal
      </h1>
      <div className="flex items-center">
        {game.display ? (
          <>
            <h1 className="my-2 sm:my-0 text-xl mr-3">Round {game.round}</h1>
            {game.box > 0 ? (
              <h1 className="sm:mx-5 text-xl mr-3">
                {game.player !== "banker" ? "Your Box" : "Contestent's Box"}{" "}
                {game.box}
              </h1>
            ) : null}
          </>
        ) : null}
        <ToggleButton onClick={changeTheme} />
      </div>
    </header>
  );
};

export default HeaderView;
