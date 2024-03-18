
import { Routes,Route , useLocation,  HashRouter } from 'react-router-dom';
import './App.css';
// import Particles from "react-tsparticles";
// import { loadFull } from "react-tsparticles";
// import {  loadFull} from "tsparticles";
import About from './Pages/About';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Particlse from './halper/Particlse';

function App() {
  const location=useLocation()

//      console.log(location);


     const renderpage = location.pathname === "/"

   




  return (
    <div className='noapp'>

     { renderpage&& (<Particlse/>)}
     
    
	
      <Navbar/>
<div className=' main-page-content'>
   
    <HashRouter>
    <Routes>
      <Route path='/'
      element={<Home/>}/>

<Route path='/about'
      element={<About/>}/>

<Route path='/education'
      element={<Education/>}/>


<Route path='/skill'
      element={<Skill/>}/>
   


    <Route path='/contact'
      element={<Contact/>}/>

</Routes>
</HashRouter>

</div>

    </div>
  )}

export default App;
