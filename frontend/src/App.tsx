import React from 'react';
import './App.css'
import {AppBar, Box, Stack, Typography} from '@mui/material';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AnotherPage from './AnotherPage';
import Home from './Home';
import OverviewPage from './OverviewPage';

const App = () => {
    return (
        <Box sx={{maxWidth: 'xl', height: '100%'}}>
            <BrowserRouter>
                <AppBar>
                    <Stack direction='row' gap={4} padding={2}>
                        <Link to='/'><Typography color='primary' variant='h5'>Home</Typography></Link>
                        <Link to='overview'><Typography color='primary' variant='h5'>What's in this App</Typography></Link>
                        <Link to='page'><Typography color='primary' variant='h5'>Another Page</Typography></Link>
                    </Stack>
                </AppBar>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='overview' element={<OverviewPage />}/>
                    <Route path='page' element={<AnotherPage />}/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
};

export default App
