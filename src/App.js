import './App.css';
import Countdown from 'react-countdown';

function App() {
  
  return (
    <div className="App">
         <Countdown date={new Date('2021-09-17T17:00:00')} />

    </div>
  );
}

export default App;