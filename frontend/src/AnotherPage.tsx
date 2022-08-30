import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const AnotherPage = () => {

    const [textFromServer, setTextFromServer] = useState<string>('');

    useEffect(() => {
        axios.get("/api/sample").then(r => setTextFromServer(r.data));
    }, []);

    return (
        <Stack gap={4}>
            <Typography variant='h3'>
                A different React Router route
            </Typography>
            <Typography variant='body1' color={grey[500]}>
                {textFromServer}
            </Typography>
        </Stack>
    );
};

export default AnotherPage;