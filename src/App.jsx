import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './components/Buttons';
import AppHeader from './components/AppHeader';
import AppCard from './components/AppCard';
import { languages } from './assets/languages';
function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
 
  return (
    <div className='container'>
      <AppHeader/>
      <Buttons onClick={setSelectedLanguage} languages={languages}/>
      <AppCard data={selectedLanguage}></AppCard>
    </div>
  )
}

export default App