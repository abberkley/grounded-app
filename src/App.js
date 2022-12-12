import {images} from './constants' ;
import {AboutUs, Locations, Menu} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav-section'>
          <h1 className='logo'>grounded</h1>
          <ul className='nav-list'>
            <li><a href="/" className="active">our menu</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">locations</a></li>
          </ul>
        </nav>
        <h2>at grounded, it's always good coffee time.</h2>
      </header>
      <main>
        <Menu/>
        <AboutUs/>
        <Locations/>
      </main>
      <footer>
        <h2>coffe grounded with care & brewed to perfection.</h2>
        <div class="footer-logo">
          <h1>grounded</h1>
          <ul className='footer-links'>
            <li><a>{images.instagram}</a></li>
            <li><a>{images.facebook}</a></li>
            <li><a>{images.tiktok}</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
