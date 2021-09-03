import './App.css';
import './Components/Fruits'
import Fruits from './Components/Fruits';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <ol>
              <Fruits/>
            </ol>
          </div>
      </header>
    </div>
  );
}

export default App;
