import { createContext } from "react";
import { io } from "socket.io-client";
import { SERVER_URL } from "../../config/Variables/Environment";

export const Socket = io(SERVER_URL, {
  autoConnect: false,
});

export const SocketContext = createContext();
