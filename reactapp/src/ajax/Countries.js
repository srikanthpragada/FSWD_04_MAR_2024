import React, { useState, useEffect} from "react";
import $ from "jquery";


export default function Countries() {
    const [region , setRegion] = useState('')
    const [regions, setRegions] = useState([])
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        $.get({
            url: `https://restcountries.com/v3.1/all`,
            success: resp => {
                setCountries(resp);
                setRegions(getRegions(resp))
                setLoading(false)
            },
            error: (error) => {
                alert("Sorry! Could not get country details!")
            },
        });
    }, []);

    // select countries by the selected region 
    function getCountriesByRegion(e) {
         let region = e.target.value 
         setRegion(region)
         setSelectedCountries (countries.filter( c => c.region === region))   
    }

    // Get all unique regions into an array 
    function getRegions(countries) {
        var regionNames = new Set()
        for(var i = 0; i < countries.length ; i ++)
            regionNames.add( countries[i].region)
   
        return Array.from(regionNames) 
    }
   
    return (
        <div>
            <h1>Find Countries By Region</h1>
            Regions :
            <select onChange={getCountriesByRegion} value={region}>
                 {
                    regions.map((v,idx) => 
                       <option value={v}>{v}</option>)
                 }
            </select>
            <p></p>
            {isLoading ? <span>Loading... please wait...</span> :
                <div>
                    {selectedCountries.length !== 0 &&
                        <div>
                            <h4>Countries</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Capital</th>
                                        <th>Flag</th>
                                    </tr>
                                    {selectedCountries.map((country, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>{country.name.common}</td>
                                                <td>{country.capital ? country.capital.join(",") : "None"}</td>
                                                <td>
                                                    <img style={{ width: '100px', height: '50px' }}
                                                        src={country.flags.png} alt={country.name} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </thead>
                            </table>
                        </div>
                    }
                </div>
            }
        </div>
    );
}