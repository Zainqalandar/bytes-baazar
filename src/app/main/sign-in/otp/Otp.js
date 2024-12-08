import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Button, IconButton, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import useSignIn from '../../hooks/useSignIn';
import { getOtpState, setOtpOpen } from './store/otpSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Otp = ({ data }) => {
  const { email, password, remember } = data;

  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const handleOtp = useCallback((e) => {
    setOtp(e);
  }, []);
  const isOtpOpen = useSelector(getOtpState);
  const { signInWithOtp } = useSignIn();

  return (
    <Modal
      open={isOtpOpen}
      // If there is a requirement that we need to close the Modal on outside click we will need this
      // onClose={() => setOtpOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="border-b-formBordersColor generalContainer flex items-center justify-between border-b-[1px] p-4">
          <h6 className="text-darkColor text-[16px] font-semibold">
            Two Factor Authentication (2FA)
          </h6>
          <IconButton onClick={() => dispatch(setOtpOpen(false))} size="large">
            <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
          </IconButton>
        </div>
        <div className="generalContainer mt-4 p-4 text-left">
          <div
            className="mb-6 rounded border border-green-400 bg-green-100 px-4 py-3 text-[14px] text-green-700"
            role="alert"
          >
            <p className="font-commissioner text-green-700">
              Do not close this page whilst looking for your code
            </p>
          </div>
          <div className="my-4">
            <h6 className="text-darkColor text-[16px] font-semibold">
              Please enter 4-digit verification code we&apos;ve sent you via email
            </h6>
            <p className="font-regular mt-2">
              If you don&apos;t receive a code, please get in touch
            </p>
          </div>
          <div className="my-12 flex items-center justify-center">
            <OtpInput
              value={otp}
              onChange={handleOtp}
              numInputs={4}
              shouldAutoFocus
              className="otpFields otpInput mx-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button
              onClick={() =>
                signInWithOtp(
                  {
                    email,
                    password,
                    remember,
                  },
                  otp
                )
              }
              variant="contained"
              color="secondary"
              className=" mt-16"
              aria-label="Sign in"
              disabled={otp.length !== 4}
              type="submit"
              size="medium"
            >
              Verify
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default React.memo(Otp);
