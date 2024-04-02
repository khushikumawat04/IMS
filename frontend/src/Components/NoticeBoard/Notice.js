import React, { useState } from 'react'
import './notice.css';

const Notice = () => {
    const [notice , setNotice] = useState("");

    const NoticeBtn = async (e) => {
        e.preventDefault();
        try {
          let result1 = await fetch("http://127.0.0.1:8080/notice", {
            method: 'post',
            body: JSON.stringify({ notice }),
            headers: {
              'Content-Type': 'application/json'
            },
          });
          if (!result1.ok) {
            throw new Error(`HTTP error! Status: ${result1.status}`);
          }
          result1 = await result1.json();
          console.log(result1);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div>
      <h2>Notice</h2>
      <form>
      <div class="form-group shadow-textarea">
      <label for="exampleFormControlTextarea6">Notice Board</label>
      <textarea class="form-control" 
      id="exampleFormControlTextarea6"
      name='Notice'
       rows="3"
       placeholder="Write something here..."
       onChange={(e) => setNotice(e.target.value)}>
      </textarea>
      <button type="button" class="btn btn-danger noticebtn" onClick={NoticeBtn}>Send</button>
      </div>
      </form>
     
    </div>
  )
}
export default Notice;
