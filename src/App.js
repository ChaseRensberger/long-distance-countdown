import './App.css';
import Countdown from 'react-countdown';

function App() {
  
  return (
    <div className="App">
         <Countdown date={new Date('2021-10-07T20:00:00')} />

    </div>
  );
}

export default App;