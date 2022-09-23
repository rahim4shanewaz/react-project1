import React from 'react';
import './Country.css'

const Country = (props) => {
    const {population, flags, name} = props.country;
    return (
        <div className='country'>
            <h1>Country name: <br></br> {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>

            
        </div>
    );
};

export default Country;