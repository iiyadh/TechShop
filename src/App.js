import './App.css';
import NavBar from './component/NavBar';
import Shop from './pages/Shop';
import Card from './pages/Card';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import ShopContextProvider from './context/ShopContextProvider';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/card' element={<Card/>}/>
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
