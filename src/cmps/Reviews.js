import React from 'react';
import quote from '../styles/images/bg-quotes.png';

const Reviews = _ => {
    return <div className="review-list container flex">
        <img src={quote} alt="quote" />
        <div className="card">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="profile">
                logo
                name
                role
        </div >
        </div>
        <div className="card">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="profile">
                logo
                name
                role
        </div>
        </div>
        <div className="card">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="profile">
                logo
                name
                role
        </div>
        </div>
    </div>
}

export default Reviews;