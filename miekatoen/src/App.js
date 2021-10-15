import { NavBar } from './components/navbar';
import { Homepage } from './components/Homepage';
import { Footer } from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Homepage />
      
      <Footer />
    </div>
  );
}

export default App;
