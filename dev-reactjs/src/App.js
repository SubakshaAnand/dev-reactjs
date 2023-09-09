import logo from './logo.svg';
import './App.css';
import { startMessage } from './common/common';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      React Web Application
      </header>
    </div>
    <div className='myClass'>
          <p>{startMessage}</p>
        </div>
    </>
  );
}

export default App;
