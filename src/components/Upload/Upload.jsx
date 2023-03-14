import React, {useState} from "react";
import './Upload.css';
import Navbar from '../Navbar/Navbar';
import {API, Storage} from "aws-amplify";
import {createNote as createNoteMutation} from "../../graphql/mutations";

export const Upload = (props) => {
    const [name, setName] = useState('');
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const file = form.get("file");
        const data = {
            name: form.get("name"),
            university: form.get("description"),
            course: form.get("course"),
            file: file.name,
        };
        if (!!data.file) await Storage.put(file.name, file);
        await API.graphql({
            query: createNoteMutation,
            variables: { input: data },
        });
        event.target.reset();
    }

    return (
        // body
        <div>
            {/* top bar */}
            <Navbar/>
            <div>
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="flex-container">
                        <div className="flex-child">
                            <label className="upload-labels" for="name">Document Name:</label>
                            <br/>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name"
                                   className="upload-input"/>
                            <br/>
                            <br/>
                            <label className="upload-labels" for="university">University:</label>
                            <br/>
                            <input value={university} onChange={(e) => setUniversity(e.target.value)} type="text"
                                   className="upload-input"/>
                            <br/>
                            <br/>
                            <label className="upload-labels" for="course">Course:</label>
                            <br/>
                            <input value={course} onChange={(e) => setCourse(e.target.value)} type="text"
                                   className="upload-input"/>
                        </div>

                        <div className="flex-child">
                            <label className="upload-labels" for="Upload">Choose Your File:</label>
                            <br/>
                            <div className="upload-button-container">
                                <button className="button upload-button">
                                    Upload
                                </button>
                            </div>
                            <br/>
                            <label className="upload-labels" for="selected-file">
                                Selected File:
                            </label>
                            <br/>
                            <input value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)} type="text"
                                   className="upload-filename" disabled/>
                            <br/>
                            <br/>
                            <br/>
                            <button className="button" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}