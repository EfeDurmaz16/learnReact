import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return( 
  <div>
  <Header name = "Anna" color = "purple" />
  <Main greet = "Howdy" />
  <Sidebar greet = "Hi" />

  </div>
  );
}


export default App;
