import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Modals from './Components/Modals/Modals';


function App() {
  return (
      <BrowserRouter>
    <div className="App">        
        <Modals />             
    </div>
      </BrowserRouter>
  );
}

export default App;
