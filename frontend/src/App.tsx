import React from 'react';
import './App.css'
import {AppBar, Box, Stack, Typography} from "@mui/material";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AnotherPage from "./AnotherPage";
import Home from "./Home";

const App = () => {

    return (
        <Box>
            <BrowserRouter>
                <AppBar>
                    <Stack direction='row' gap={4} padding={2}>
                        <Link to="/"><Typography variant={"h5"}>Home</Typography></Link>
                        <Link to="page"><Typography variant={"h5"}>Another Page</Typography></Link>
                    </Stack>
                </AppBar>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="page" element={<AnotherPage />}/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
};

export default App
