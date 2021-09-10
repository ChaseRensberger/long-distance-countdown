import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {

  const daysHoursMinSecs = {days: 6, hours: 22, minutes: 45, seconds: 0}
  
  return (
    <div className="App">
        <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}/>
    </div>
  );
}

export default App;