import React, {useState} from "react";
import './Profile.css';
import Navbar from '../Navbar/Navbar';




export const Profile = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return(
        // body
        <div>
            {/* top bar */}
            <Navbar/>
            <div>
                Profile (in construction)
                
        
            </div>

        </div>
    )
}
export default Profile;