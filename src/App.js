import { images } from './constants';
import { AboutUs, Locations, Menu } from './containers';
import './App.css';
import React, { useState, useRef } from 'react';

function App() {
	const [visibleItem, setVisibleItem] = useState(2);

	return (
		<div className="App">
			<header>
				<nav className="nav-section">
					<h1 className="logo text-on-dark">grounded</h1>
					<ul className="nav-links text-on-dark">
						<li
							className={visibleItem === 1 ? 'active' : ''}
							onClick={() => setVisibleItem(1)}
						>
							<p>our menu</p>
						</li>
						<li
							className={visibleItem === 2 ? 'active' : ''}
							onClick={() => setVisibleItem(2)}
						>
							<p>about us</p>
						</li>
						<li
							className={visibleItem === 3 ? 'active' : ''}
							onClick={() => setVisibleItem(3)}
						>
							<p>our locations</p>
						</li>
					</ul>
				</nav>
				<h2 className="hero-message text-on-dark">
					at grounded, it's always good coffee time.
				</h2>
			</header>
			<main>
				{visibleItem === 1 && <Menu />}
				{visibleItem === 2 && <AboutUs />}
				{visibleItem === 3 && <Locations />}
			</main>
			<footer>
				<h2 className="footer-message">
					coffee grounded with care & brewed to perfection.
				</h2>
				<div className="footer-logo">
					<h1 className="text-on-dark">grounded</h1>
					<ul className="footer-links">
						<li>
							<a className="text-on-dark">
								<img src={images.instagram}></img>
							</a>
						</li>
						<li>
							<a className="text-on-dark">
								<img src={images.facebook}></img>
							</a>
						</li>
						<li>
							<a className="text-on-dark">
								<img src={images.tiktok}></img>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default App;
