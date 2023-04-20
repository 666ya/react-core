import { useEffect } from "react";
import createConnection from "./ceateConnection";

export default function ChatRoom() {
  useEffect(() => {
    const connect = createConnection();
    connect.connnect();
    // return () => {
    //   connect.disconnect();
    // };
  }, []);
  return <h1> Welcome to the chat!</h1>;
}
