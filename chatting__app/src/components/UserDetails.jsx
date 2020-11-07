import React from 'react';
import '../css/ChattingBox.css';

function UserDetails() {
    return (
        <>
        <div className="user_details_mainbox">
            <div className="input_feild">
                <input type="text" placeholder="Enter Your Usrname"/>
                <input type="text" placeholder="Enter your profile URL"/>
            </div>
        </div>
        </>
    )
}

export default UserDetails;
