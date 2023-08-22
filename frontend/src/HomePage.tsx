import React, {useState} from 'react';
import {Button, Link as MuiLink, Stack, Typography} from "@mui/material";
import reactLogo from "./assets/react.svg";
import {grey} from "@mui/material/colors";

const HomePage = () => {
    const [count, setCount] = useState(0)

    return (
        <Stack sx={{minHeight: '100vh'}} pb={10} px={4} alignItems={'center'} justifyContent={'center'} >
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
                <Button variant="outlined" color='primary'
                        onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </Stack>
            <Typography variant='h5' color={grey[500]} paddingBottom={2}>
                Frontend packages
            </Typography>
            <Stack direction='row' gap={4}>
                <MuiLink color='secondary' textAlign='center' fontSize={{xs: 'large', md: 'x-large'}} href='https://mui.com/material-ui/getting-started/overview/'>
                    Material UI
                </MuiLink>
                <MuiLink color='secondary' textAlign='center' fontSize={{xs: 'large', md: 'x-large'}} href='https://mui.com/material-ui/material-icons/#main-content'>
                    Material Icons
                </MuiLink>
                <MuiLink color='secondary' textAlign='center' fontSize={{xs: 'large', md: 'x-large'}} href='https://axios-http.com/docs/intro'>
                    Axios
                </MuiLink>
                <MuiLink color='secondary' textAlign='center' fontSize={{xs: 'large', md: 'x-large'}} href='https://reactrouter.com/docs/en/v6'>
                    React Router v6
                </MuiLink>
            </Stack>
        </Stack>
    )
};

export default HomePage;