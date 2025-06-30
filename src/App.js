
import './App.css';
import ListaVocki from './components/listaVocki';


function App() {
  const name="Ivana";
  return (
   
    <div className="App">
     <h1>Zdravo {name}</h1>
     <ListaVocki/>
    </div>
    
  );
}

export default App;
