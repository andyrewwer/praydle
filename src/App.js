import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <div class="spacing"></div>
      <BoardSection />
      <div class="spacing"></div>
    </div>
  );
}

export default App;
