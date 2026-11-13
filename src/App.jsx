
import './app.css';

import Image from './components/Image';

import jerry from './assets/jerry.png';
import tom from './assets/tom.png';
import tomAndJerry from './assets/tom-and-jerry.png';
import logo from './assets/tom-and-jerry-logo.png';

function App() {
  return (
    <div className="app">
      <h1>Tom and Jerry Image Gallery</h1>
      <p>My favorite childhood cartoon!</p>

      <div className="gallery">
        <Image src={jerry} alt="Jerry Mouse" />
        <Image src={tom} alt="Tom Cat" />
        <Image src={tomAndJerry} alt="Tom and Jerry together" />
        <Image src={logo} alt="Tom and Jerry logo" />
      </div>
    </div>
  );
}

export default App;