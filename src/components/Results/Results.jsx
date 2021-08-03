import React from 'react';
import './../Results/Results.css'
import NameCard from '../NameCard/NameCard';

const ResultContainer = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });
    return (
        <div class="results-container">
            <p>{suggestedNameJSX}</p>
        </div>
    );
};

export default ResultContainer;