import React, { useState } from 'react'
import './Notes.css'
import Data from './Notesbox'
import PDF from "./webnotes.pdf";

const Note = () => {
const [item,setItem] = useState(Data);
const filterResult = (catItem)=>{
  const result = Data.filter((curdata)=>{
    return curdata.category===catItem;

  })
  setItem(result);


}

  return (
    // <>
    
      <div className='body' style={{marginTop:"100px"}} >
         <div className='grid justify-content-center'>
          <button className='btn buttton-value ' onClick={()=>{setItem(Data)}}>All</button>
          <button className='btn buttton-value' onClick={()=>{filterResult('Development')}}>Development</button>
          <button className='btn buttton-value' onClick={()=>{filterResult('Programming')}}>Programming</button>
         </div>
         


        < div className="row mt-5 d-flex justify-content-evenly card1">
        <div className="card-deck row justify-content-evenly mx-4 mt-5 ">

          {
            item.map((elem)=>{
              const {productName, Image, pdfs } = elem;

              return(
                <>
                <div className='col-md-3 mx-3 bg-white p-5 my-3 notes Notecards'> 
  <img className="card-img-top " src={Image} alt="Card image cap"/>
  <div className="card-body text-center mt-2">
    <h5 className="card-title">{productName}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn  mt-4" onClick={pdf}>View Detail</a> */}
    <button type="button" className="btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color: "black"}}>
    Open PDF
  </button>




  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content" style={{height:"500px"}}>
        <div className="modal-header">
          <h5 className="modal-title text-danger" id="exampleModalLabel">PDF</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
      <iframe
      src={PDF}
      frameBorder="0"
      scrolling="auto"
      height="100%"
      width="100%"
  ></iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* </div> */}
  
  </div>
  </div> 
                
                </>

              )

            })
          }
  
        </div>
         </div>

       

          


         </div>
 
  )
}

export default Note