import React from 'react'
import './about.css';
import AboutData from './AboutData';

const About = () => {
  return (
    <div className='about'>
        <div className='container grid1'>
            <div className='left row'>
            <img className='girl' src='img3.jpg' alt='girl'/>
            </div>
            <div className='right row'>
            <h3 className='learn'> LEARN ANYTHING</h3>
                <h2 className='beni'>Benefits About Online Learning Expertise</h2>
                <div className='items'>
                  {AboutData.map((val)=>
                  <div className='item flexSB'>
                   <div className='imagee'>
                    <img src={val.cover} alt='g'/>
                    </div>
                    <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                   </div>
                  </div>)}
                </div>     
            </div>
        </div>
    </div>
  )
}

export default About;
