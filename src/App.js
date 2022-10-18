
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviwes from './components/Home/Reviwes/Reviwes';
import Dashboard from './components/Home/Dashboard/Dashboard';
import Blogs from './components/Home/Blogs/Blogs';
import About from './components/Home/About/About';
import NotFound from './components/Home/NotFound/NotFound';
import CustomLink from './components/Home/CustomLink/CustomLink';

function App() {
  return (
    <div className="App">
      
      <nav className='flex justify-center space-x-4 mt-3 text-xl'>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Reviwes">Reviwes</CustomLink>
        <CustomLink to="/Dashboard">Dashboard</CustomLink>
        <CustomLink to="/Blogs">Blogs</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Reviwes" element={<Reviwes></Reviwes>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
