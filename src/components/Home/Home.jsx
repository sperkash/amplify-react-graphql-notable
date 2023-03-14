import React, {useState} from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';




export const Home = (props) => {
    const[name, setName] = useState('');
    const[university, setUniversity] = useState('');
    const[course, setCourse] = useState('');
    const[selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return(
        // body
        <div>
             {/* top bar */}
             <Navbar/>
            <div>
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="flex-container">
                    <div className="flex-child">
                        <label className="upload-labels" for="name">Try Searching Our Database:</label>
                        <br/>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="upload-input" placeholder="Document Name"/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="button" type="submit">Search</button>
                    </div>

                    <div className="flex-child">
                        <label className="upload-labels" for="filter">Filter Your Search:</label>
                        <br/>
                        <input value={university} onChange={(e)=> setUniversity(e.target.value)} type="text" className="upload-input" placeholder="University/School"/>
                        <br/>
                        <br/>
                        <label className="upload-labels" for="course">Course:</label>
                        <br/>
                        <input value={course} onChange={(e)=> setCourse(e.target.value)} type="text" className="upload-input" placeholder="Course/Subject"/>
                    </div>
                    </div>
                </form>
                <br/>
                <br/>
                    <table className="search-table">
                    <tr>
                        <th>Document Name</th>
                        <th>University</th>
                        <th>Course</th>
                        <th>Download</th>
                    </tr>
                    <tr>
                        <td>CMPT 474 - Lecture 1 Notes</td>
                        <td>Simon Fraser University</td>
                        <td>CMPT 474</td>
                        <td><a className='download-button'>Download</a></td>
                    </tr>
                    </table>
            </div>

        </div>
    )
}
export default Home;