import React,{useState} from 'react'
import './Contact.css';

const Contact = () => {
       const[data,setData] = useState({
              Name: "",
              Email: "",
              Message: "",
          });
          const {Name, Email, Message} = data;

          const handlechange = (e) => {
              setData({...data, [e.target.name]: e.target.value});
          };

          const handleSubmit = async (e) => {
              e.preventDefault();
      
              try {
                  const response = await fetch('https://v1.nocodeapi.com/enrollmentform01/google_sheets/wJVSVoACVJtdGyKt?tabId=Sheet2' , 
                  {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify([[Name, Email, Message , new Date().toLocaleString()]])
                  });
                  await response.json();
                  setData({...data, Name: "", Email: "", Message: ""});
              } catch (err) {
                  console.log(err)
              }
          }
  return (
    <> 
       <div className="contact_info " style={{marginTop:"100px"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-md-flex justify-content-between maindiv">
                    {/* phone number */}
                    <div className="contact_info_item d-md-flex justify-content-md-start align-items-center">
                           <div className="contact_info_content my-3">
                              <i class="fa-solid fa-phone"></i>
                             <div className="contact_info_text ">
                                +91 1111 543 2198
                             </div>
                           </div>
                    </div>
                     {/*email address */}
                     <div className="contact_info_item d-flex justify-content-md-start align-items-center" >
                           <div className="contact_info_content ">
                             <i class="fa-solid fa-envelope"></i>
                             <div className='contact_info_text'>
                                youremail@gmail.com
                             </div>
                           </div>
                    </div>
                     {/* Address */}
                     <div className='contact_info_item d-flex justify-content-md-start align-items-center'>
                           <div className='contact_info_content'>
                           <i class="fa-sharp fa-solid fa-location-dot"></i>
                             <div className='contact_info_text'>
                                Khargone M.P.10
                             </div>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
<form  onSubmit={handleSubmit}>
{/* https://formspree.io/f/xyyawlal */}
<section id="contact">
 

 	<div class="form" >
              <h4>Let's Connect</h4>
              <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
              <div class="form-col">
                     <input type="text" placeholder="Your Name" name="Name" value={Name} 
          onChange={handlechange}/>
                    
              </div>
              <div class="form-col">
              <input type="text" placeholder="Email" name="Email" value={Email} 
          onChange={handlechange}/>
              </div>
              <div class="form-col">
                     <textarea name="Message" id="" cols="30" rows="8" placeholder="How can we help?"
                     value={Message} 
          onChange={handlechange} ></textarea>
              </div>
              <div class="form-col">
                     <button>Message</button>
              </div>
       </div>
      
 
 </section>
 </form>

 <section id="map">
        <iframe  title="myFrame"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59261.71627781473!2d75.57801420398216!3d21.824445037221928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd885c4bd93b163%3A0xae95ec27b40bf31d!2sKhargone%2C%20Madhya%20Pradesh%20451001!5e0!3m2!1sen!2sin!4v1677405703901!5m2!1sen!2sin"  style={{border:0 , marginLeft: "8rem" , marginRight: "2rem"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

</section>






       
    </>
  )
}

export default Contact