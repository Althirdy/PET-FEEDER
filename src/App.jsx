import { useState } from "react";
import "./App.css";
import { database, ref, set } from "./firebase";

function App() {
  const feedPet = () => {
    set(ref(database, "petFeeder/command"), {
      action: "FEED",
      timestamp: Date.now(),
    })
      .then(() => {
        console.log("Command sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending command: ", error);
      });
  };

  return (
    <div>
      <button onClick={feedPet}>Feed Pet</button>
    </div>
  );
}

export default App;
