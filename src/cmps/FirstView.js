import React from 'react';
import illustration from '../styles/images/illustration-intro.png';

const FirstView = _ => {
    return <div className="first-view container">
        <img src={illustration} style={{ width: 720, height: 534 }} alt="illu" />
        <h1>All your files in one secure location, <br /> accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location.<br /> Access them wherever you need, share and collaborate with<br /> friends family, and co-workers.</p>
        <button>Get Started</button>
    </div>
}

export default FirstView;