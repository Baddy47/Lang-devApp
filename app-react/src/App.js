import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Messages from "./components/messages/Messages";
import {Route, Routes} from 'react-router-dom';
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import React from "react";

function App(props) {
	return (
			<div className="App">
				<Header />
				<Navbar />
				<Sidebar />
				<div className='appContent'>
					<Routes>
						<Route path='/profile/*' element={<Profile state={props.state.profilePage} />} />
						<Route path='/messages/*' element={<Messages state={props.state.messagePage} />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
)
}

export default App;