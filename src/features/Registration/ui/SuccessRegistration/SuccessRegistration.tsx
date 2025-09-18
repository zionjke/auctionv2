import { Box, Button, Typography } from '@mui/material';
import React, { FC } from 'react';

interface SuccessRegistrationProps {
    message?: string;
    handleCloseSuccessModal: () => void;
}
export const SuccessRegistration:FC<SuccessRegistrationProps> = ({ message, handleCloseSuccessModal }) => (
    <Box sx={{ textAlign: 'center', p: 1 }}>
        <Typography variant="h5" component="div" sx={{ mb: 2, fontWeight: 600 }}>
            Registration Successful!
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            {message || 'Registration completed successfully! Please login with your credentials.'}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
            You will be redirected to the login page.
        </Typography>

        <Button
            onClick={handleCloseSuccessModal}
            variant="contained"
            size="large"
            sx={{ minWidth: 120 }}
            autoFocus
        >
            Continue
        </Button>
    </Box>
);
