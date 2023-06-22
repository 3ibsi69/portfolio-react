import React, { useState, useEffect } from 'react';

function Home() {
  const [currentText, setCurrentText] = useState('');
  const texts = ["welcome to my portfolio", "I am a web developer", "Living in Tunisia"];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let intervalId;

    const typeText = () => {
      const word = texts[currentWordIndex];
      const typedText = word.substring(0, currentCharIndex);
      setCurrentText(typedText);

      if (currentCharIndex < word.length) {
        currentCharIndex++;
      } else {
        currentWordIndex = (currentWordIndex + 1) % texts.length;
        currentCharIndex = 0;
      }
    };

    intervalId = setInterval(typeText, 150); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 id="myname">abbassi ahmed</h1>
      <h3 id="text-move">{currentText}</h3>
      <a href="../Pictures/Ahmed_Abbassi_CV_en.pdf" download>
        <button className="btn">Download Resume</button>
      </a>
    </div>
  );
}

export default Home;
