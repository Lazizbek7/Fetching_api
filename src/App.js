import './App.css';
import About from './components/About';
import Header from './components/Header';
import Main from "./components/Main";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
