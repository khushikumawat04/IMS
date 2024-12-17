import React from 'react'
import './note.css';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
// import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link } from 'react-router-dom';

const Studymaterial = () => {
  return (
    <div>
      <div className='kuchbhi'>
        
        <div className='container p-2 text-center'>
            <div className='row'>
                <h2 className='heading'>Study Material</h2>
                <div className='col-md-2'>
                    <Link to="/lecture"><div className='card cardViewer'>
                        <div className='card-body'>
                            <VideoCameraBackIcon style={{color: "black"}}/>
                            <h5 className='mt-4' style={{color: "black"}}>Videos</h5>
                            </div>
                    </div></Link>
                </div>
        
                <div className='col-md-2'>
                    <Link to="/notes"><div className='card cardViewer'>
                        <div className='card-body'>
                        <NoteAltOutlinedIcon style={{color: "black"}}/>
                            <h5 className='mt-4' style={{color: "black"}}>Notes</h5>
                        </div>
                    </div></Link>
                </div>
        
                {/* <div className='col-md-2'>
                <Link to="/pdf"><div className='card cardViewer'>
                        <div className='card-body'>
                            <PictureAsPdfOutlinedIcon className='icons'/>
                            <h5 className='mt-4'>PDF</h5>
                        </div>
                    </div></Link>
                </div> */}
        
                <div className='col-md-2'>
                <Link to="/mcq"><div className='card cardViewer'>
                        <div className='card-body'>
                            <ImportContactsTwoToneIcon style={{color: "black"}}/>
                            <h5 className='mt-4' style={{color: "black"}}>MCQ</h5>
                        </div>
                    </div></Link>
                </div>
        
                <div className='col-md-2'>
                <Link to="/test"><div className='card cardViewer'>
                        <div className='card-body'>
                            <DescriptionOutlinedIcon className='icon' style={{color: "black"}}/>
                             <h5 className='content mt-4' style={{color: "black"}}>Test</h5>
                            {/* <a href="/test">Test</a> */}
                        </div>
                    </div></Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Studymaterial;
