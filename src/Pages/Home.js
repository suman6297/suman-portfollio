import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom";
import {Animate  } from "react-simple-animate";

const Home = () => {
const navigate =useNavigate()
const handlecontactme=()=>{
navigate("/contact")
}
 

  return (
    <section id='home' className='home'>

      <div className='text-wapper'>

        <h1>
          Hello, I'm Suman

          <br />
          M . E . R . N  Stack Developer .
        </h1>


      </div>
<Animate
play duration={1.5}
delay={1}
start={{transform:'translatey(550px)'}}
end={{transform:'translatex(0px)'}}
> <div className='clikeme'>
<button onClick={handlecontactme}>
  Contact Me
</button>

      </div></Animate>
     
    </section>
  )
}

export default Home