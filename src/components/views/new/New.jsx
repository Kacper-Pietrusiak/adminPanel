import React, {useState} from 'react';
import './new.scss';
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({title, inputs}) => {
    const [file, setFile] = useState(null)

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file
                                ? URL.createObjectURL(file)
                                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
                             alt=""
                        />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor='file'>
                                    Image: <DriveFolderUploadIcon className='icon'/>
                                </label>
                                <input
                                    type="file"
                                    id='file'
                                    onChange={e => setFile(e.target.files[0])}
                                    style={{display: 'none'}}/>
                            </div>

                            {inputs.map(input => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}

                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="john_doe"/>
                            </div>

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
