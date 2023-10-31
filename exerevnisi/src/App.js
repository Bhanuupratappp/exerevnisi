import logo from './logo.svg';
import './App.css';
import { MainPage } from './MainPage';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MainRoutes } from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">

     <Navbar />
     <MainRoutes />
     <Footer />
     
    </div>
  );
}

export default App;
