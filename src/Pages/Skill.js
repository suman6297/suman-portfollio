import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import "./skill.css"
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from "rc-progress";
const skilldata=[{
  label:"Front End",
  data:[
    {
      skillname:"Html",
      percentage:"90",
    },

    {
      skillname:"Css",
      percentage:"80",
    },

    {
      skillname:"Javascript",
      percentage:"80",
    },

    {
      skillname:"Tailwind Css",
      percentage:"80",
    },
    {
      skillname:"Git",
      percentage:"70",
    },
    {
      skillname:"Github",
      percentage:"70"
    }


  ]
},
{
  label:"M.E.R.N Stack Developer",
  data:[
    {
      skillname:"Mongodb",
      percentage:"70",
    },

    {
      skillname:"Express.js",
      percentage:"60",
    },

    {
      skillname:"React",
      percentage:"80",
    },

    {
      skillname:"Node.js",
      percentage:"60"
    }


  ]
},{
  label:" Orther Skill",
  data:[
    {
      skillname:"Problem Solving",
      percentage:"75"
    },
    {
      skillname:"Time Management",
      percentage:"80"
    }
  ]
}


]




const Skill = () => {
  return (<>
  <div className='skill'>
    <div className='wapper'>
    <h2>My Skill</h2>
    <span><BsInfoCircleFill size={40} />
    </span>

  </div>
  <div className='skilldata'>
    {
      skilldata.map((item,i)=>(
<div key={i} className='skilldatafirst'>
<Animate
play
duration={1}
delay={0.3}
start={{
  transform: "translatex(-500px)"
}}

end={{
  transform: "translatex(0px)"
}}


>

  <h3 className='textitem'>{item.label}</h3>
  <div className='divfirst'>
    {
      item.data.map((skillitem,j)=>(
        <AnimateKeyframes
        play
        duration={1}
        keyframes={["opacity:1","opacity:0"]}
        iterationCount={1}>
          <div className='progress'key={j}>
            <p className='pfirst'>{skillitem.skillname}</p>
            <Line
           percent={skillitem.percentage}
            strokWidth="2"
            strokeColor="var( --yellow-theme-main-color)"
            trailWidth={"2"}

            strokeLinecap="squar" className='dh'/>
          </div>
        </AnimateKeyframes>
      ))
    }
  </div>
  
</Animate>
</div>
      ))
    }
  </div>
  
  </div>
  </>
  )
}

export default Skill