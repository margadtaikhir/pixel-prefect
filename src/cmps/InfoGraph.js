import React from 'react';
import accessLogo from '../styles/images/icon-access-anywhere.svg';
import securityLogo from '../styles/images/icon-security.svg';
import collabLobo from '../styles/images/icon-collaboration.svg';
import anyFileLogo from '../styles/images/icon-any-file.svg';

const InfoGraph = _ => {
    return <div className="info-graph container">
        <div className="info-graph-item flex column align-center 1">
            <img src={accessLogo} alt="logo" />
            <h1>Accesss your files, anywhere</h1>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="info-graph-item flex column align-center 2">
            <img src={securityLogo} alt="logo" />
            <h1>Security you can trust</h1>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>        </div>
        <div className="info-graph-item flex column align-center 3">
            <img src={collabLobo} alt="logo" />
            <h1>Real-time collaboration</h1>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div className="info-graph-item flex column align-center 4">
            <img src={anyFileLogo} alt="logo" />
            <h1>Store any type of file</h1>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
    </div>
}

export default InfoGraph;