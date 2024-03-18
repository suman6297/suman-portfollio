import React from 'react'
import './About.css'
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from 'react-simple-animate';
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
const About = () => {
  return (<>
    <div className='wapper'>
      <h2>About Me</h2>
      <span><BsInfoCircleFill size={40} />
      </span>

    </div>
<div className='about'>
  <div className='aboutfirstandsecond'>
    <Animate
    play duration={1.5}
    delay={1}
    start={{transform:'translatex(-900px)'}}
    end={{transform:'translatex(0px)'}}
    >
    <div className='aboutfirst'>
      <h3>M.E.R.N Stack Developer </h3>
      <p className='aboutp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, ad nostrum <br/>voluptates repellendus dolorem aspernatur praesentium earum. Animi facere temporibus perferendis error ea vel magni sit officiis enim, deserunt neque!</p>

    </div></Animate>



    <div className='aboutsecond'>
    <Animate
    play duration={1.5}
    delay={1}
    start={{transform:'translatex(900px)'}}
    end={{transform:'translatex(0px)'}}
    >
      <h3> Personal Information</h3><br/><ul><li>
      Name:- Suman Ghosh,</li>
     <li>Age:-22,</li> 
     <li>Address:- Purba Bardhaman, India</li> 
      <li>Email:-sumanghoshgoyalpara54321@gmail.com</li>
      <li>Contact No:-6297837536<br/></li></ul>
     
       </Animate></div></div>
       <div className='survicewrappermain'>
       <Animate
    play duration={1.5}
    delay={1}
    start={{transform:'translatex(600px)'}}
    end={{transform:'translatex(0px)'}}
    >
       <div className='survicewrapper'>
        
      <div className='child1'><SiMongodb size={60} color="var(--yellow-theme-main-color)"/></div>
      <div className='child2'><SiExpress size={60} color="var(--yellow-theme-main-color)"/></div>
      <div className='child3'><FaReact size={60} color="var(--yellow-theme-main-color)"/></div>
      <div className='child4'> <FaNode size={60} color="var(--yellow-theme-main-color)"/></div>

    
      </div></Animate></div>
    </div>
    </>
  )
}

export default About