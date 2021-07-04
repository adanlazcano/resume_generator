
import {MainProvider} from './context/MainContext';
import Help from './components/help/Help';
import Left from './components/left/Left';
import Right from './components/right/Right';
import './css/App.css';

function App() {

  return (
    <>
      <Help/>
      <div className="App">
        <MainProvider>
          <Left />
          <Right/>
        </MainProvider>
      </div>
    </>
  );
}

export default App;
