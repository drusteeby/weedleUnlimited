import logo from './logo.svg';
import './App.css';
import AutoSelect from './Components/AutoSelect';
import pokedex from './Data/pokedex.json'
import GuessTable from './Components/GuessTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function onChangeName(e){
  console.log(e);
};

function App() {

  let pokeNames = pokedex.map((entry) => entry.name.english);
  let correctAnswer = pokedex.find(entry => entry.name.english === "Weedle");

  console.log(correctAnswer);

  return (
<div className="App">
    
    <h1 className="App-header"> Weedle Unlimited</h1>
    <h2 className="App-caption">WEEDLE GUESSING GAME</h2>
    <GuessTable guesses={pokedex} correctAnswer={correctAnswer}/>
    <input  onChange={onChangeName}></input>
    <AutoSelect
        options={pokeNames}
      />
</div>
  );
}

export default App;

