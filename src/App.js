import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Middle from './components/middle/middle';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        <Header/>
        <Middle/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
