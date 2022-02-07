import React, { useState, useEffect } from "react";

function App() {
  // sets current state to count =0 and inner text set to empty string
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(
    //side effect function
    () => {
      //change the title of the webpage each time the text variable changes (below)
      document.title = text;
    },
    [text]
  );
  useEffect(
    () => {
      //reset the count variable to 0 after 5 seconds
      setTimeout(() => setCount(0), 5000);
    },
    //2nd arg: dependencies array, if [count] is entered, only runs when count variable changes
    //if an empty array [], will only run  the FIRST time component renders
    []
  );

  console.log("Component rendering");

  return (
    <div>
      {/* increase count +1 every time button is clicked */}
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      {/* creates input box with inner text reading "type away..." */}
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
