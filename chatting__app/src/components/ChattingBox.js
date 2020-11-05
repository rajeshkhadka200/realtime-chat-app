import React from 'react'
import FotterComponent from "./FotterComponent";
import MessageDisplayArea from "./MessageDisplayArea";
import "../css/ChattingBox.css";

const ChattingBox = () => {
    return (
        <div className="main__box">
             <Header />
            <MessageDisplayArea />
            <FotterComponent />
        </div>
    )
}

export default ChattingBox
