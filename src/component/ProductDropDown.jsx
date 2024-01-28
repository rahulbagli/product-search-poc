import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { countries } from './Constants';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';


function ProductDropDown() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState('');
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ margin: '17px', fontFamily: 'sans-serif'   }}>
                Search Product By:
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                <InputLabel id="demo-select-small-label">Product Search</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Product Search"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {countries.map((country, index) => (
                        <MenuItem key={index} value={country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {selectedCountry && (
            <FormControl sx={{ margin: '17px', fontFamily: 'sans-serif'  }} >
                Product Details:
            </FormControl>
            )}
            {selectedCountry && (
                <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                    <InputLabel>Product Details</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Product Details"
                        value={selectedState}
                        onChange={handleStateChange}
                    >
                        {countries
                            .find((country) => country.name === selectedCountry)
                            .states.map((state, index) => (
                                <MenuItem key={index} value={state}>
                                    {state}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
            )}
            <Button variant="contained" sx={{ margin: '9px' }} startIcon={<Search />} >Search Product</Button>
        </>
    )
}

export default ProductDropDown;