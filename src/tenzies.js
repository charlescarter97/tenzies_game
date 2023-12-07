import React from "react";
import Dice from "./dice";
import diceObject from "./diceObject";
import Confetti from 'react-confetti';

function GenerateDice() {
  const [futureDice, setDice] = React.useState(diceObject);
  const [count, changeCount] = React.useState(0);
  const [tenzies, setTenzies] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  function makeTheDice() {
    if (!tenzies) {
      changeCount(count + 1);
      const updatedDice = futureDice.map((dice) => {
        if (!dice.isHeld) {
          return {
            ...dice,
            diceValue: Math.floor(Math.random() * 6) + 1,
          };
        }

        return dice;
      });

      setDice(updatedDice);
    } else {
      setTenzies(false);
      setDice(diceObject);
      changeCount(count - count);
      setHighScore(highScore);
    }
  }

  function holdTheDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = futureDice.map((dice) => (
    <Dice key={dice.id} diceValue={dice.diceValue} isHeld={dice.isHeld} holdDice={() => holdTheDice(dice.id)} />
  ));

  React.useEffect(() => {
    const allHeld = futureDice.every((dice) => dice.isHeld);
    const firstValue = futureDice[0].diceValue;
    const allSameValue = futureDice.every((dice) => dice.diceValue === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
    if(allHeld && allSameValue && highScore === 0 ){
      setHighScore(time)
    }
  }, [futureDice, time, highScore]);

  React.useEffect(() => {
    let interval = null;

    if (!tenzies) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [tenzies, time]);

  React.useEffect(() => {
    window.localStorage.setItem('local_highscore', JSON.stringify(time));
  }, [time]);

  const [localHighScoreUpdated, setLocalHighScoreUpdated] = React.useState(false);

React.useEffect(() => {
  const localHighScore = parseInt(window.localStorage.getItem('local_highscore'), 10);

  if (tenzies && localHighScore !== null) {
    setHighScore((prevHighScore) => {
      if (!localHighScoreUpdated && (prevHighScore === 0 || localHighScore < prevHighScore)) {
        console.log("Updating highScore...");
        setLocalHighScoreUpdated(true);
        return localHighScore;
      }

      return prevHighScore;
    });
  }
}, [tenzies, highScore, localHighScoreUpdated]);
  
  


  return (
    <main>
      {tenzies && <Confetti />}
      <p className="theTitle">Tenzies!</p>
      <p className="howtoPlay">Roll the dice until all the dice are the same. Click on the dice to hold the value</p>
      <div className="dice-container">{diceElements}</div>
      <div className="dice-div">
        <button onClick={makeTheDice} className="roll-dice">
          {tenzies ? "You won" : "Roll"}
        </button>
        <p>Number of Rolls: {count}</p>
        <p>{time}</p>
        <p>High Score: {highScore}</p>
      </div>
    </main>
  );
}

export default function Generator() {
  return <GenerateDice />;
}
