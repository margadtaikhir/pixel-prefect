import React from 'react';
import Navbar from '../cmps/NavBar';
import FirstView from '../cmps/FirstView';
import InfoGraph from '../cmps/InfoGraph';
import DetailedInfo from '../cmps/DetailedInfo';
import Reviews from '../cmps/Reviews';
import EmailSubscription from '../cmps/EmailSubscriptoin';
import Footer from '../cmps/Footer';

const FyloApp = _ => {
    return <main>
        <Navbar></Navbar>
        <FirstView></FirstView>
        <InfoGraph></InfoGraph>
        <DetailedInfo></DetailedInfo>
        <Reviews></Reviews>
        {/*<EmailSubscription></EmailSubscription>
        <Footer></Footer> */}
    </main>
}

export default FyloApp;