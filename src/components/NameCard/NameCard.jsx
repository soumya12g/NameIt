import React from 'react'
import './../NameCard/NameCard.css'
const nameCheapurl = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ suggestedName }) => {
    return (
        <a className="card-link" href={`${nameCheapurl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;