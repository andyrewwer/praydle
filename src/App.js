import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCampground, faStore, faHome, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { faBomb, faDrum, faBacterium, faDragon, faGuitar} from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { faBackspace, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// requires FA Premium :( import { faAxe} from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faBackspace, faCheckCircle);
  // hard coded in utils/Enums.js
  library.add(faBuilding, faCampground, faStore, faHome, faIgloo);
  library.add(faBomb, faDrum, faBacterium, faDragon, faGuitar);
  library.add(faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret);
  return (
    <div className="App">
      <HeaderSection />
      <BoardSection />
      <Keyboard />
    </div>
  );
}

export default App;
