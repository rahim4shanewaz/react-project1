import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country name: <br></br> {props.name}</h1>
            <img src={props.flag} alt="" />
            <h3>Population: {props.population}</h3>

            
        </div>
    );
};

export default Country;