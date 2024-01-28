import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateUrl from './CreateUrl';
import { products } from './Constants';


function ProductsDetail() {
    const [isChecked, setIsChecked] = useState([]);
    const [checkedValue, setCheckedValue] = useState([]);

    const handleChange = (index) => (e) => {
        const newIsChecked = [...isChecked];
        newIsChecked[index] = e.target.checked;
        setIsChecked(newIsChecked);

        if (e.target.checked) {
            setCheckedValue((prev) => [...prev, e.target.value]);
        } else {
            setCheckedValue((prev) => prev.filter((item) => item !== e.target.value));
        }
    }

    return (
        <div>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={5}>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead sx={{ bgcolor: '#183a61b3' }}>
                                <TableRow >
                                    <TableCell  sx={{ color: 'white' }}>Product Id - Product Name</TableCell>
                                    <TableCell align="center" sx={{ color: 'white' }}>Product Compare</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row, index) => (
                                    <TableRow key={row.name} sx={{ bgcolor: isChecked[index] ? '#3350bd' : '#fff' }}>
                                        <TableCell sx={{ padding: '0px  15px',  color: isChecked[index] ? '#fff' : 'black' }}>
                                            {row.productId} - {row.name}
                                        </TableCell>
                                        <TableCell align="center"  sx={{ padding: '0px  15px', color: isChecked[index] ? '#fff' : 'black' }}>
                                            <Checkbox sx={{ '&.Mui-checked': {color: "white"} }}
                                                checked={isChecked[index] || false}
                                                onChange={handleChange(index)}
                                                value={row.key}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<CheckCircleIcon />}
                                                disabled={!isChecked[index] && checkedValue.length >= 3}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={3} sx={{ marginLeft: '3%' }}>
                    <CreateUrl checkedValue={checkedValue} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductsDetail