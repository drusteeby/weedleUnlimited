import logo from './logo.svg';
import './App.css';
import AutoSelect from './Components/AutoSelect';
import pokedex from './Data/pokedex.json'
import GuessTable from './Components/GuessTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownList from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';

function App()
{

  let pokeNames = pokedex.map((entry) => entry.name.english);
  let correctAnswer = pokedex.find(entry => entry.name.english === "Weedle");

  let onGuessSubmitted = (guess) => console.log(guess);

  return (
    <div className="App">

      <h1 className="App-header"> Weedle Unlimited</h1>
      <h2 className="App-caption">WEEDLE GUESSING GAME</h2>
      {/* <AutoSelect
        options={pokeNames}
        onGuessSubmitted={onGuessSubmitted}
      /> */}
      <div className='justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-1' />
          <div className='col-5'>
            <Combobox data={pokeNames}
              onSelect={onGuessSubmitted} />
          </div>
          <div className='col-1' />
        </div>
        <div className='row justify-content-center'>
          <div className='col-1' />
          <div className='col-5'>
            <GuessTable guesses={pokedex} correctAnswer={correctAnswer} />
          </div>
          <div className='col-1' />
        </div>

      </div>





    </div>
  );
}

export default App;

