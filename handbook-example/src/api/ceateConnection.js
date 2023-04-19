export default function createConnection() {
  return {
    connnect() {
      console.log("Connecting……");
    },
    disconnect() {
      console.log("Disconnected");
    },
  };
}
