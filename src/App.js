import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/Header';
import MianPage from './Screens/Mianpage';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        <Header/>
        <MianPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
