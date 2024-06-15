// used to share data between components without using props

import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const MoodContext = createContext();

export default function UseContext() {
  const [mood, setMood] = useState("[:(]");

  return (
    <UserContext.Provider value={"tech1savvy"}>
      <MoodContext.Provider value={{ mood, setMood }}>
        <MoodEmoji />
        <MoodChanger />
      </MoodContext.Provider>
    </UserContext.Provider>
  );
}

// consuming the context value

function MoodEmoji() {
  const user = useContext(UserContext);
  const { mood } = useContext(MoodContext);

  return <p>{user + " - " + mood}</p>;
}

function MoodChanger() {
  const { mood, setMood } = useContext(MoodContext);

  return (
    <button onClick={() => setMood(mood === "[:(]" ? "[:)]" : "[:(]")}>
      Change Mood
    </button>
  );
}
