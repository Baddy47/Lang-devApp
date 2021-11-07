import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  	return (
		<div className="App">
		
			<Header />
			<Navbar />
			<Sidebar />
			<Profile />

		</div>
  )
}

export default App;