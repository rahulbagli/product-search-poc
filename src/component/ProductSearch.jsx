import React from 'react'
import Header from './Header'
import ProductDropDown from './ProductDropDown'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductsDetail from './ProductsDetail';
import ProductCompareTable from './ProductCompareTable';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#fff',
    textAlign: '-webkit-center',
    padding: '20px'
}));

function ProductSearch() {
    return (
        <div>
            <Header />
            <Grid container justifyContent="center"
                alignItems="center" padding={'15px'}>
                <Grid item md={10}>
                    <Item>
                        <ProductDropDown />
                    </Item>
                </Grid>
                <Grid item md={10} sx={{ marginTop: '20px' }}>
                    <Item>
                        <ProductsDetail />
                    </Item>
                </Grid>
                <Grid item md={10} sx={{ marginTop: '20px' }}>
                        <ProductCompareTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductSearch