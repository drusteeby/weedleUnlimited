import './App.css';
import pokedex from './Data/pokedex.json'
import GuessTable from './Components/GuessTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App()
{

  let correctAnswer = pokedex.find(entry => entry.name.english === "Weedle");

  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [guessAttempts, setguessAttempts] = useState(0);
  const [popupIsOpen, setpopupIsOpen] = useState(false);
  const [maxGuessAttempts, setMaxGuessAttempts] = useState(8);

  let onGuessSubmitted = (guess) =>
  {
    setPreviousGuesses([...previousGuesses, guess]);    
    setguessAttempts(guessAttempts + 1);

    if(guess.id == correctAnswer.id)
    {
      console.log("Congrats!")
      return;
    }

    if(guessAttempts = maxGuessAttempts)
    {
      setpopupIsOpen(true);
    }
  }

  return (
    <div className="App">
      <Popup open={popupIsOpen} position="right center" modal>
        <div>Popup content here !!</div>
      </Popup>
      <h1 className="App-header"> Weedle Unlimited</h1>
      <h2 className="App-caption">WEEDLE GUESSING GAME</h2>
      <h3>{guessAttempts + ' of 8 guesses'}</h3>
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
          <div className='col-5'>
            <GuessTable guesses={previousGuesses} correctAnswer={correctAnswer} />
          </div>
          <div className='col-1' />
        </div>

      </div>





    </div>
  );
}

export default App;

