import React from 'react';
import { db } from "../Firebase/Firebase";


function FetchData() {
    var dataFirebase = db.collection('chatApp').get()
    .then((snapshot)=>{console.log(dataFirebase)});
    return (
        <>
        {/* {console.log(dataFirebase)} */}
        </>
    )
}

export default FetchData
