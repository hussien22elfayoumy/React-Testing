import './app.css';
import Async from './components/async';
import Greeting from './components/greeting';

function App() {
  return (
    <div className='App'>
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
