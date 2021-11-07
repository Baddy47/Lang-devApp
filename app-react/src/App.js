import './App.css';
import Header from './components/header/Header';
import Ptofile from './components/profile/Ptofile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  	return (
		<div className="App">
		
			<Header />
			<Navbar />
			<Sidebar />
			<Ptofile />

		</div>
  )
}

export default App;