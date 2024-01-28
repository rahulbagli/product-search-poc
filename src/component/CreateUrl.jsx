import React from 'react'
import Button from '@mui/material/Button';
import { BASE_URL } from './Constants';
import { Compare } from '@mui/icons-material';

function CreateUrl({checkedValue}) { 
    
    const generateURL = () => {
        const urlParams = new URLSearchParams();
        checkedValue.forEach((param, index) => {
        urlParams.append(`param${index + 1}`, param);
      });
  
      return `${BASE_URL}?${urlParams.toString()}`;
    };
  
    return (
      <div>
        <Button disabled={checkedValue.length <= 1} variant="contained" startIcon={<Compare />} onClick={() => alert(generateURL())}>Compare Product</Button >
      </div>
    );
}

export default CreateUrl