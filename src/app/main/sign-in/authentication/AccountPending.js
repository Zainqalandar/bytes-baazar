import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import WelcomeContent from 'app/shared-components/WelcomeContent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { accountPendingState, setAccountPending } from './store/accountPendingSlice';

function AccountPending() {
  const dispatch = useDispatch();
  const isAccountPending = useSelector(accountPendingState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAccountPending) {
      navigate('/');
    }
    return () => {
      dispatch(setAccountPending(false));
    };
  }, [isAccountPending]);

  return (
    <div className="flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
      <Paper className="h-full w-full py-8 px-16 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none">
        <div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
          <img className="w-48" src="assets/images/logo/logo.png" alt="logo" />

          <Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
            Your account is pending
          </Typography>
          <Typography className="mt-16">
            A member of the EMG team is reviewing your account. Once it's approved you will receive
            an email with instructions. Thank you for your patience.
          </Typography>

          <Typography className="mt-32 text-md font-medium" color="text.secondary">
            <span>Return to</span>
            <Link className="text-primary-500 ml-4 hover:underline" to="/sign-in">
              sign in
            </Link>
          </Typography>
        </div>
      </Paper>

      <Box
        className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112"
        sx={{ backgroundColor: 'primary.main' }}
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
            sx={{ color: 'primary.light' }}
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
          className="absolute -top-64 -right-64 opacity-20"
          sx={{ color: 'primary.light' }}
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
          <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
        </Box>

        <WelcomeContent />
      </Box>
    </div>
  );
}

export default AccountPending;
