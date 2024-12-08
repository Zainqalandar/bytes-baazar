import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import JwtService from '../../auth/services/jwtService';

function SignOutPage() {
  useEffect(() => {
    setTimeout(() => {
      JwtService.logout();
      // reset state on sign-out
      // cant move it to root reducer because when we sign-out using url logout method isnt called
      window.location.pathname = '/sign-in';
    }, 1000);
  }, []);

  return (
    <div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center">
      <Paper className="flex min-h-full w-full items-center rounded-0 py-32 px-16 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow">
        <div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
          <img className="mx-auto w-48" src="assets/images/ks/1594282584185.jpeg" alt="logo" />
          <Typography className="mt-32 text-center text-4xl font-extrabold leading-tight tracking-tight">
            You have signed out!
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default SignOutPage;
