import React from 'react';
import illustration from '../styles/images/illustration-stay-productive.png';

const DetailedInfo = _ => {
    return <div className="detailed-info container flex align-center">
        <img src={illustration} alt="illu" />
        <div className="container">
            <h1>Stay productive,
wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <a href="''">See how Fylo works</a>
        </div>
    </div>
}

export default DetailedInfo;