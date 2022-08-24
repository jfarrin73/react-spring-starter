import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AppBar, Box, Button, Link as MuiLink, Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
    const [count, setCount] = useState(0)

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
                    <Route index element={
                        <>
                            <Stack direction='row' justifyContent='center'>
                                <MuiLink href="https://vitejs.dev" target="_blank">
                                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                                </MuiLink>
                                <MuiLink href="https://reactjs.org" target="_blank">
                                    <img src={reactLogo} className="logo react" alt="React logo"/>
                                </MuiLink>
                            </Stack>
                            <Typography variant='h2' fontWeight={500}>Vite + React</Typography>
                            <Stack alignItems='center' padding='2em' gap={2}>
                                <Button variant="contained" color='success'
                                        onClick={() => setCount((count) => count + 1)}>
                                    count is {count}
                                </Button>
                                <Typography variant='body1'>
                                    Edit <code>src/App.tsx</code> and save to test HMR
                                </Typography>
                            </Stack>
                            <Typography variant='h5' color={grey[500]} paddingBottom={2}>
                                Frontend packages
                            </Typography>
                            <Stack direction='row' gap={4}>
                                <MuiLink href='https://mui.com/material-ui/getting-started/overview/'>
                                    Material UI
                                </MuiLink>
                                <MuiLink href='https://mui.com/material-ui/material-icons/#main-content'>
                                    Material Icons
                                </MuiLink>
                                <MuiLink href='https://axios-http.com/docs/intro'>
                                    Axios
                                </MuiLink>
                                <MuiLink href='https://reactrouter.com/docs/en/v6'>
                                    React Router v6
                                </MuiLink>
                            </Stack>
                        </>
                    }/>
                    <Route path="page" element={
                        <Stack>
                            <Typography variant='h3'>
                                A different React Router route
                            </Typography>
                        </Stack>
                    }/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App
