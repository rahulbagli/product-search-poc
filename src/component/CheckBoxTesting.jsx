import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBoxTesting = () => {
    const [checkboxes, setCheckboxes] = useState([
        { label: 'Option 1', checked: false },
        { label: 'Option 2', checked: false },
        { label: 'Option 3', checked: false },
        { label: 'Option 4', checked: false }
      ]);
      const [checkedValues, setCheckedValues] = useState([]);
    
      const handleCheckboxChange = (index) => (event) => {
       
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = event.target.checked;
        setCheckboxes(updatedCheckboxes);
    
        const label = updatedCheckboxes[index].label;
    
        if (event.target.checked) {
            const newCheckedValues = [...checkedValues, label];
            setCheckedValues(newCheckedValues)
        } else { 
            const newCheckedValues = checkedValues.filter((item) => item !== label);
            setCheckedValues(newCheckedValues)
        }
        console.log('final valued:', checkedValues);
      };
    
      return (
        <div>
          {checkboxes.map((checkbox, index) => (
                  <Checkbox
                    checked={checkbox.checked}
                    onChange={handleCheckboxChange(index)}
                  />
          ))}
        </div>
      );
    };

export default CheckBoxTesting;