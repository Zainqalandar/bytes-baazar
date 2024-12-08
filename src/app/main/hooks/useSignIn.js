import { showMessage } from 'app/store/fuse/messageSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import JwtService from 'src/app/auth/services/jwtService';
import { ACCOUNT_PENDING_ERROR, OTP_FAIL_ERROR } from '../const';
import { setAccountPending } from '../sign-in/authentication/store/accountPendingSlice';
import { setOtpOpen } from '../sign-in/otp/store/otpSlice';

const useSignIn = () => {
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const errorType = error.type;
        if (errorType === OTP_FAIL_ERROR) {
            dispatch(setOtpOpen(true));
        }
        if (errorType === ACCOUNT_PENDING_ERROR) {
            dispatch(setAccountPending(true));
        }
        if (error?.message) {
            dispatch(showMessage({ message: error.message || 'Unknown Error', autoHideDuration: 3500 }));
        }
    }, [error]);

    const signInWithOtp = (credentials, otp) => {
        JwtService.signInWithCredentials(credentials, otp)
            .then((user) => {
                // No need to do anything, user data will be set at app/auth/AuthContext
            })
            .catch((errors) => {
                setError(errors[0]);
            });
    };

    return {
        setError,
        error,
        signInWithOtp,
    };
};

export default useSignIn;
