import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";

const ClientRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </>
  );
};

export default ClientRoutes;
