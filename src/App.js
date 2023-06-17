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

function App()
{


  let correctAnswer = pokedex.find(entry => entry.name.english === "Weedle");
  console.log(correctAnswer);

  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [guessAttempts, setguessAttempts] = useState(0);
  const [popupIsOpen, setpopupIsOpen] = useState(false);
  const [maxGuessAttempts, setMaxGuessAttempts] = useState(4);
  const [popupContent, setPopupContent] = useState("");

  let resetGame = () =>
  {
    setPreviousGuesses([]);
    setguessAttempts(0);
    setpopupIsOpen(false);
  };

  let onGuessSubmitted = (guess) =>
  {
    let guessNumber = guessAttempts + 1;

    setPreviousGuesses([...previousGuesses, guess]);
    setguessAttempts(guessNumber);

    if (guess.id == correctAnswer.id)
    {
      DisplayEndGamePopup(true);
    }
    else if (guessNumber >= maxGuessAttempts)
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
      <h2 className="App-caption">WEEDLE GUESSING GAME</h2>
      <h4>{format('{0} of {1} guesses', guessAttempts, maxGuessAttempts)}</h4>
      <div className='justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-1' />
          <div className='col-5'>
            <Combobox data={pokedex}
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


