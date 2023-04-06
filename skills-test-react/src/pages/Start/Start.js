import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from '../../components/Account/AccountMenu';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
	const handleOnClick = () => {
		console.log('open');
		navigate("/todo");
	};
    return(
        <div>
            <Container maxWidth="sm">
            <AccountMenu onClick={handleOnClick} />
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                React Skills test
                </Typography>
            </Box>
            </Container>
        </div>
    );
}

export default Start;