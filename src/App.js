
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import DashBoard from './components/DashBoard/DashBoard';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='home' element={<Home />} ></Route>
        <Route path='reviews' element={<Review />} ></Route>
        <Route path='dashboard' element={<DashBoard />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='about' element={<About />}></Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
