import './App.css';
import pokedex from './Data/pokedex.json'
import GuessTable from './Components/GuessTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { format } from 'react-string-format';

function App({ difficulty })
{

  let genOnePokemon = pokedex.slice(0, 151);


  let difficultySettings = {
      "SuperEasy":
      {
        "maxGuessAttempts": 420
      },
      "Normal":
      {
        "maxGuessAttempts": 10
      },
      "Hard":
      {
        "maxGuessAttempts": 8
      }
    };

  console.log(difficultySettings);

  const generateCorrectAnswer = () => 
  {
    if(difficulty != "SuperEasy")
      {
        return genOnePokemon[Math.floor(Math.random() * genOnePokemon.length)];
      }
      return genOnePokemon[12]; //Weedle
  }

  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [guessAttempts, setguessAttempts] = useState(0);
  const [popupIsOpen, setpopupIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(generateCorrectAnswer());

  let resetGame = () =>
  {
    setPreviousGuesses([]);
    setguessAttempts(0);
    setpopupIsOpen(false);
    
    setCorrectAnswer(generateCorrectAnswer());
  };

  let onGuessSubmitted = (guess) =>
  {
    let guessAttempt = guessAttempts + 1;

    setPreviousGuesses([...previousGuesses, guess]);
    setguessAttempts(guessAttempt);

    if (guess.id == correctAnswer.id)
    {
      DisplayEndGamePopup(true);
    }
    else if (guessAttempt >= difficultySettings[difficulty].maxGuessAttempts)
    {
      DisplayEndGamePopup(false);
    }
  }

  let DisplayEndGamePopup = (winner) => 
  {
    setpopupIsOpen(true);
    let content = (winner) ?

      <>
        <div> You Win! </div>
        <button onClick={resetGame}>
          Reset Game
        </button>
      </>
      :
      <>
        <div>{format("The correct answer was {0}", correctAnswer.name.english)}</div>
        <button onClick={resetGame}>
          Reset Game
        </button>
      </>

    setPopupContent(content);
  }

  return (
    <div className="App">
      <Popup open={popupIsOpen}
        position="right center"
        closeOnDocumentClick={false}
        closeOnEscape={false}>
        {popupContent}
      </Popup>
      <h1 className="App-header"> Weedle Unlimited</h1>
      <h2 className="App-caption">POCKET MONSTERS GUESSING GAME</h2>
      <h4>{format('{0} of {1} guesses', guessAttempts, difficultySettings[difficulty].maxGuessAttempts)}</h4>
      <div className='justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-1' />
          <div className='col-5'>
            <Combobox data={genOnePokemon}
              onSelect={onGuessSubmitted}
              textField={(item) =>
              {
                return typeof item === 'string' ? item : (item.name.english);
              }} />
          </div>
          <div className='col-1' />
        </div>
        <div className='row justify-content-center'>
          <div className='col-1' />
          <div className='col-10'>
            <GuessTable guesses={previousGuesses} correctAnswer={correctAnswer} />
          </div>
          <div className='col-1' />
        </div>
      </div>
    </div>
  );
}

export default App;


