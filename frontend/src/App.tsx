import React from 'react';
import './App.css'
import {AppBar, Box, Stack, Typography} from '@mui/material';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import OverviewPage from './OverviewPage';
import {ToDoListPage} from "./todolist/ToDoListPage";

const App = () => {
    return (
        <Box minHeight='100vh' minWidth='100vw' overflow='hidden'>
            <BrowserRouter>
                <AppBar>
                    <Stack direction='row' gap={4} padding={2}>
                        <Link to='/'><Typography color='primary' variant='h5' sx={{textDecoration: 'none' }}>Home</Typography></Link>
                        <Link to='overview'><Typography color='primary' variant='h5'>What's in this App</Typography></Link>
                        <Link to='page'><Typography color='primary' variant='h5'>Your To Do List</Typography></Link>
                    </Stack>
                </AppBar>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path='overview' element={<OverviewPage />}/>
                    <Route path='page' element={<ToDoListPage />}/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
};

export default App
