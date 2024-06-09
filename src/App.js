import Achivements from './Achivements/Achivements';
import './App.css';
import ContactInfo from './ContactInfo/ContactInfo';
import Discription from './Discription/Discription';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='page'>
      <Discription/>
      <Projects/>
      <Achivements/>
      <Skills/>
      <ContactInfo/>
      </div>
    </div>
  );
}

export default App;
