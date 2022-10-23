import './New.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

const New = ({inputs, title}) => {

  // initialize useState
  const [file, setFile] = useState("");

  return (
    <div className="new">
      {/* sidebar */}
      <Sidebar />

      {/* new content */}
      <div className="newContainer">
        {/* navbar */}
        <Navbar />

        {/* title */}
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          {/* image */}
          <div className="left">
            <img
              // if there is a file then set file as new image
              src={file 
                ? URL.createObjectURL(file) 
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
              alt=""
            />
          </div>

          {/* upload image form */}
          <div className="right">
            <form>
              <div className="formInput">
                {/* connect label and file input with htmlFor & id */}
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  style={{display:"none"}} 
                  // set selected file to state file
                  onChange={e => setFile(e.target.files[0])}
                />
              </div>

              {/* map through inputs array */}
              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
              {/* submit button */}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
