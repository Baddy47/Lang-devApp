import  './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Messages from "./components/messages/Messages";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import React from "react";

function App() {
  	return (
  		<BrowserRouter>
			<div className="App">
				<Header />
				<Navbar />
				<Sidebar />
				<div className='appContent'>
					<Routes>
						<Route path='/profile/*' element={<Profile />} />
						<Route path='/messages/*' element={<Messages />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
)
}

export default App;