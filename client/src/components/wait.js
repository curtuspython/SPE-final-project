import React from 'react'
import wai from './images/wait.jpg';
const wait = () => {
    document.title = "Wait";
    return (
        <div>
            <div>
                <img src={wai}  width= "100%" height="60%"/>
            </div>
        </div>
    )
}

export default wait