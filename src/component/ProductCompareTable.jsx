import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { data } from './Constants';

function ProductCompareTable() {
    const keys = Object.keys(data.products[0]);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead sx={{ bgcolor: '#183a61b3' }}>
                        <TableRow>
                            <TableCell></TableCell>
                            {data.products.map((row) => (
                                <TableCell sx={{ color: 'white' }}>{row['title']}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {keys.map((columnProprty) => {
                            const columnValues = data.products.map((row) => row[columnProprty]);
                            return (
                                <TableRow key={columnProprty}>
                                    <TableCell sx={{ padding: '5px 15px', color: 'rgb(15 19 104)', bgcolor: 'rgb(169 192 223 / 82%)' }}>{columnProprty.toUpperCase()}</TableCell>
                                    {columnValues.map((colValue, index) => {
                                        const isDifferent = columnValues.indexOf(colValue) !== columnValues.lastIndexOf(colValue);
                                        const color = isDifferent ? 'inherit' : 'red';
                                        return (
                                            <TableCell key={index} sx={{ padding: '5px 15px', color }}>
                                                {colValue}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductCompareTable