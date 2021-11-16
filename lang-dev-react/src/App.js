import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Library from './components/library/library';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Games from './components/games/games';
import Learn from './components/learn/learn';

function App() {

	const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library'))  || []);
	return (
    	<BrowserRouter>
			
			<Header />

			<Switch>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>

				<Route path='/games'>
					<Games />
				</Route>

				<Route path='/library'>
					<Library library={library} setLibrary={setLibrary} />
				</Route>

				<Route path='/learn'>
					<Learn library={library} />
				</Route>
			</Switch>

    	</BrowserRouter>
  	);
}	

export default App;