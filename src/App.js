import './App.css';
import Countdown from 'react-countdown';

function App() {
  
  return (
    <div className="App">
         <Countdown date={new Date('2022-05-07T00:00:00')} />

    </div>
  );
}

export default App;