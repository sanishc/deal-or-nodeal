import "./styles/App.css";
import { SocketContext, Socket } from "./services/Socket/Socket";
import { BrowserRouter, Switch } from "react-router-dom";
import ClientRoutes from "./routes/ClientRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/FooterView";
import EventHandler from "./components/PopUps/EventHandler";

function App() {
  return (
    <BrowserRouter>
      <SocketContext.Provider value={Socket}>
        <Header />
        <Switch>
          <ClientRoutes />
        </Switch>
        <Footer />
        <EventHandler />
      </SocketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
