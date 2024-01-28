import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { countries } from './Constants';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function searchProduct() {
    alert('hello');
}

function ProductDropDown() {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ margin: '17px', fontFamily: 'sans-serif' }}>
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
                <FormControl sx={{ margin: '17px', fontFamily: 'sans-serif' }} >
                    Product Details:
                </FormControl>
            )}
            {selectedCountry && (() => {
                const stateNames = countries.find((country) => country.name === selectedCountry).states.map((state) => state);
                return (
                    <FormControl sx={{ m: 1, minWidth: 180 }}>
                        <Autocomplete sx={{
                            "& .MuiInputBase-root": { height: "39px" }, "& .MuiInputLabel-root": { marginTop: '-7px' }
                        }}
                            id="free-solo-demo"
                            key={selectedCountry}
                            freeSolo
                            options={stateNames || []}
                            renderInput={(params) => <TextField {...params} label="Product Details"
                                sx={{
                                    "& .MuiAutocomplete-input": { textAlign: 'center' },
                                    "& .MuiOutlinedInput-root": { paddingTop: '0px' }
                                }} />}
                        />
                    </FormControl>
                );
            })()}
            <Button variant="contained" sx={{ margin: '9px' }} startIcon={<Search />} onClick={searchProduct}>Search Product</Button>
        </>
    )
}

export default ProductDropDown;