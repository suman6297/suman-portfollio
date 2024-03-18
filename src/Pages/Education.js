import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import './Education.css'
import'react-vertical-timeline-component/style.min.css'
import { MdWork } from "react-icons/md";
const Education = () => {

  const biodata = {
    Education: [
      {
        title: "Secondary",
        subtitle: "Gangatikuri A.N Bidyamandir",
        description: "10th Grade-A"
      },
      {
        title: "Higher Secondary",
        subtitle: "Gangatikuri A.N Bidyamandir",
        description: "12th Grade in Arts"
      },
      {
        title: "Gragution",
        subtitle: "Katwa Collage",
        description: "B.A Grade in Arts"
      },
    ],
    Computer: [
      {
        title: "Basic , Deploma",
        subtitle: "Katwa Rastriyo Youth Computer Center",
        description: "Basic And Deploma"
      },
      {
        title: "Web Development ",
        subtitle: "Vidyastu",
        description: "Full stack web Development"
      },
    ],
  }


  return (
    <div className='resume'><div className='wapper'>
      <h2>Education</h2>
      <span><BsInfoCircleFill size={40} />
      </span>

    </div>
    <div className='timeline'>
      <div className='education'>
        <h3 className='h3first'>
          School College
        </h3>
        <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >

          {
            biodata.Education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className='verticaltimelineelement'
                contentStyle={{background:'none',
                color:"var( --yellow-theme-sub-text-color)",
                border:'1px solid var(--yellow-theme-main-color)'}}
                icon={<MdWork/>} 
                iconStyle={{color:'var(--yellow-theme-main-color)',
                background:'#181818'}}>
                <div className='verticaltimelineelement1'
                >
                  <h3 className='verticaltimelineelementh3' >
                    {item.title}
                  </h3>
                  <h4 className='verticaltimelineelementh4'
                  >
                    {
                      item.subtitle
                    }
                  </h4>
                  <p style={{fontSize:'16px'}}>{
                    item.description}</p>
                </div>

              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
      </div >
      <div className='computer'  style={{boxShadow:'none'}}>
        <h3 className='h3first'>
          Computer
        </h3>
      
      <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          style={{boxShadow:'none'}} >

          {
            biodata.Computer.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className='verticaltimelineelement'
                contentStyle={{background:'none',
                color:"var( --yellow-theme-sub-text-color)",
                border:'1px solid var(--yellow-theme-main-color)'}}
                icon={<MdWork/>} 
                iconStyle={{color:'var(--yellow-theme-main-color)',
                background:'#181818'}}
                style={{boxShadow:'none'}}>
                <div className='verticaltimelineelement1'  style={{boxShadow:'none'}}>
                  <h3 className='verticaltimelineelementh3'>
                    {item.title}
                  </h3>
                  <h4 className='verticaltimelineelementh4'
                  >
                    {
                      item.subtitle
                    }
                  </h4>
                  <p style={{fontSize:'16px'}}>{
                    item.description}</p>
                </div>

              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline></div>
        
    </div>
    </div>
  )
}

export default Education