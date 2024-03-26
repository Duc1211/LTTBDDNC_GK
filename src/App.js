import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const welcomeTextRef = useRef(null);

  useEffect(() => {
    const welcomeText = welcomeTextRef.current;
    const text = "You are welcome!";
    const delay = 3000 / text.length;

    let index = 0;
    let displayText = "";

    function typeText() {
      displayText += text[index];
      welcomeText.textContent = displayText;
      index++;

      if (index < text.length) {
        setTimeout(typeText, delay);
      }
    }

    setTimeout(typeText, delay);
  }, []);

  return (
    <div className="App">
      <div ref={welcomeTextRef} className="welcome-text"></div>
    </div>
  );
}

export default App;