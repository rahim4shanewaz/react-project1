import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const[countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='countries'>
            <h1>Total countries:  {countries.length}</h1>
            {
                countries.map(country => <Country 
                    name={country.name.common} 
                    population={country.population}
                    flag= {country.flags.png}>
                        

                    </Country> )
            }
            
        </div>
    );
};

export default Countries;