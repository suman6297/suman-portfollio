import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import './Contact.css'
import { Animate } from "react-simple-animate";

// import { ImAirplane  } from "react-icons/im";

const Contact = () => {
  return (
    <div className='contactmain'><div className='wapper'>
      <h2>Contact Me</h2>
      <span><BsInfoCircleFill size={40} />
        {/* <AirplanemodeActiveIcon size={40}/> */}

        {/* <ImAirplane/> */}
      </span>
    </div>
    <div className='contact'>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translatex(-200px)"
        }}

        end={{
          transform: "translatex(0px)"
        }}
      >
        <h3 className='contacth3'>Let's Talk .</h3>
      </Animate>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translatex(500px)"
        }}

        end={{
          transform: "translatex(0px)"
        }}
      >
        <div className='formmain'>
          <div className='from'>
            <div className='name'>
              <input required type="text" name='name' className='mainname' />
              <label htmlFor="name" className='namelable'>NAME -</label>
              </div>



            <div className='name'>
            <input required type="text"  name='email' className='mainemail' />
              <label htmlFor="email" className='emaillable'>Email -</label>
              
            </div>
            <div className='name'>
            <textarea required type="text" name='description' className='maindescription'
            rows={5} />
              <label htmlFor="description" className='descriptionlable'>Description -</label>
            </div>
          </div>
        </div>
      </Animate>
      <Animate
play duration={1.5}
delay={0.5}
start={{transform:'translatey(550px)'}}
end={{transform:'translatex(0px)'}}
>
          <button className='button2'> Submit</button></Animate>
      </div>

    </div>
  )
}

export default Contact