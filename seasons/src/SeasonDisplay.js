import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) =>{
    if(month>3 && month <9)
    {
        return lat>0 ? 'summer' : 'winter';
    }
    else{
        return lat>0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,  new Date().getMonth());
    const icon = season === 'winter' ? 'snowflake': 'sun';

    return (
        <div className={`season-display ${season}`}>
        <i className={`icon-left rotate linear infinite massive ${icon} icon`} />
        <h1>{season === 'winter' ? 'Burr, It is Chilly': 'Lets hit the beach'}</h1>
        <i className={`icon-right rotate linear infinite massive ${icon} icon`} />
        </div>
        )
};

export default SeasonDisplay;