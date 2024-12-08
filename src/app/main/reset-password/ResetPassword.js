import React, { useState } from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import WelcomeContent from 'app/shared-components/WelcomeContent';
import Box from '@mui/material/Box';
import { TextField, Grid, DialogActions } from '@mui/material';
import { showMessage } from 'app/store/fuse/messageSlice'; 
import {  useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        code: '',
        password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
        try {
            const res = await axios.post("/password/reset", formData);
            dispatch(showMessage({ message: "Password successfully updated!" }));
            navigate('/sign-in');
          } catch (error) {
            dispatch(showMessage({ message: error.message }));
          }
        setFormData({
            email: '',
            code: '',
            password: ''
        });
    };
  return (
    <>
    <div className="flex min-w-0 flex-1 flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
      <Paper className="h-full w-full px-16 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none">
        <div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
        <img className="w-48" src="assets/images/logo/logo.png" alt="logo" />


          <Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight mb-24">
            Reset Password
          </Typography>
          
          <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="code"
                        name="code"
                        label="Code"
                        type="text"
                        fullWidth
                        value={formData.code}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                    />
                        
                        <Button
                            variant="contained"
                            color="secondary"
                            className=" mt-16 w-full"
                            aria-label="Sign in"
                            type="submit"
                            size="large"
                        >
                            Update
                        </Button>
                    </form>
         
        </div>
      </Paper>
      <Box
        className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112"
        sx={{ backgroundColor: "primary.main" }}
      >
        <svg
          className="pointer-events-none absolute inset-0"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: "primary.light" }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute -right-64 -top-64 opacity-20"
          sx={{ color: "primary.light" }}
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="220"
            height="192"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          />
        </Box>

        <WelcomeContent />
      </Box>
      </div>
    </>
  )
}

export default ResetPassword