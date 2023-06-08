import logo from './logo.svg';
import './App.css';
import AutoSelect from './Components/AutoSelect';
import pokedex from './Data/pokedex.json'

function onChangeName(e){
  console.log(e);
};

function App() {

  let pokeNames = pokedex.map((entry) => entry.name.english);

  return (
<div className="App">
    
    <h1 className="App-header"> Weedle Unlimited</h1>
    <h2 className="App-caption">WEEDLE GUESSING GAME</h2>
    <input  onChange={onChangeName}></input>
    <AutoSelect
        options={pokeNames}
      />
</div>
  );
}

export default App;

