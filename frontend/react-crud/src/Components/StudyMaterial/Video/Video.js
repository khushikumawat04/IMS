import React from 'react'
import ReactPlayer from 'react-player';
import './Vlecture.css'

const Video = () => {
    const Data =[{
        id:1,
        subj: "Web Development",
        Image: "../images/web.jpg",
        //video: <a href='https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n'></a>,
        //video: <video src="https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" controls>   </video>
        video:"https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
        
    },
    {
        id:2,
        subj:"MERN Stack",
        Image: "../images/web.jpg",
        //video: <a href='https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE'></a>,
        video:"https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE"
        
    },
    {
        id:3,
        subj:"C/C++",
        Image: "../images/web.jpg",
        //video: "<a href='https://www.youtube.com/watch?v=irqbmMNs2Bo'></a>",
        video:"https://www.youtube.com/watch?v=irqbmMNs2Bo"
        
    }
    ]

   
    
    
      return (
        <div className='container containerV'>
            <div className='row justify-content-evenly previous'>
                {
            
                    Data.map((elem)=>{
                        const{ Image, subj, video} = elem
                        return (
                        <div className='col-md-3 p-5 my-2  mx-3 bodybody'>
                          <div className='container-two'>
                            <div className='card-two'>
                              <div className='lines-two'></div>
                              <div className='imgBx-two'>
                                <img src={Image}></img>
                              </div>
                              <div className='content-two'>
                                <div className='details-two'>
                                  <h2>{subj}</h2>
                                  <p>Help you to be a programmer and developer. You can convert your ideas to web application. </p>
                                  <button type="button"  className="btn  mt-4 " data-bs-toggle="modal" data-bs-target="#exampleModal"> Open video</button>
    
                                </div>
                              </div>
                            </div>
                          </div>
                       
    
    
    
    
                           <div>
                
                
               
    
    
    
    
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{height:"500px"}}>
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLabel">Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                 <ReactPlayer url={video} height="100%" width="100%"></ReactPlayer> 
         
            </div>
            <div className="modal-footer">
              <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
            </div>
                               
    
                           </div>
                        )
    
                     })
                
     }
            </div>
    
    
          
         </div>
  )
}

export default Video
