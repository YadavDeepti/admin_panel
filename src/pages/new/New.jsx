import React, { useState } from 'react'
import "./New.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {

  const [file, setFile] =useState("");

  console.log(file);
  return (
    <div className='new'>
    <Sidebar />
    <div className="newContainer">
      <Navbar />
    <div className="top">
      <h1>{title}</h1>
    </div>
    <div className="bottom">
      <div className="left">
        <img src={
          file ? URL.createObjectURL(file) :
          "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
        } alt="" />
      </div>
      <div className="right">
        <form action="">
          <div className="formInput">
            <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon'/> </label>
            <input type="file"  id='file' 
            onChange={(e) => setFile(e.target.files[0])}
            style={{display:"none"}}/>
          </div>
         
          {inputs.map(input =>(
            <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder}/>
          </div>
          ))}
          <button>Send</button>
        </form>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default New
