import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, ButtonProps } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { lazy, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import WelcomeContent from 'app/shared-components/WelcomeContent';
import withReducer from 'app/store/withReducer';
import { combineReducers } from '@reduxjs/toolkit';
// import GoogleSignIn from './GoogleSignIn';
// import GraphSignIn from './GraphSignIn';
import useSignIn from '../hooks/useSignIn';
import accountconfirmation from './authentication/store/accountPendingSlice';
import otp from './otp/store/otpSlice';
import useSetUserInStorage from '../hooks/useSetUserInStorage';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import service from '../appwrite/userServices';
import JwtService from 'src/app/auth/services/jwtService';
import GoogleIcon from '@mui/icons-material/Google';
/**
 * Form Validation Schema
 */
const Otp = lazy(() => import('./otp/Otp'));

const schema = yup.object().shape({
	email: yup
		.string()
		.email('You must enter a valid email')
		.required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(4, 'Password is too short - must be at least 4 chars.'),
});

const defaultValues = {
	email: '',
	password: '',
	remember: false,
};

function SignInPage() {
	const [user, setUser] = useState(null);
	useSetUserInStorage();
	const { control, formState, handleSubmit, setValue, getValues } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema),
	});

	const { isValid, dirtyFields, errors } = formState;
	useEffect(() => {
		setValue('email', 'ksps.developer@gmail.com', {
			shouldDirty: true,
			shouldValidate: true,
		});
		setValue('password', 'password', {
			shouldDirty: true,
			shouldValidate: true,
		});
	}, [setValue]);

	const { signInWithOtp } = useSignIn();

	function onSubmit(data) {
		// signInWithOtp(data, null);
		JwtService.signInWithCredentials()
	}

    const handleGoogleSignIn = async () => {
		JwtService.signInWithCredentials()
        // try {
        //   const result = await signInWithPopup(auth, googleProvider);
        //   const user = result.user;
		//   console.log('user', user);
    
        //   // You can store the token if needed
        //   const token = await user.getIdToken();
        //   localStorage.setItem('token', token);
    
        //   setUser(user);
        //   alert(`Welcome ${user.displayName}`);
        // } catch (error) {
        //   console.error('Google Sign-In Error:', error);
        // }
      };

	  useEffect(() => {
		const currentUser = auth.currentUser;
		if (currentUser) {
		  setUser(currentUser);
		}
	  }, [handleGoogleSignIn]);

	//   useEffect(() => {

	// 	const getUserDetails = async () => {
	// 		try {
	// 			const response = await service.getUserDetail();
	// 			console.log('response', response.documents);
	// 			// setTodos(response.documents);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	getUserDetails();
		
		
	//   }, []);

	  console.log('user sf', user);

	return (
		<div className="flex min-w-0 flex-1 flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
			<Paper className="h-full w-full px-16 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-64 md:shadow-none">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<img
						className="w-48"
						src="assets/images/logo/logo.png"
						alt="logo"
					/>

					<Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
						Sign in
					</Typography>
					<div className="mt-2 flex items-baseline font-medium">
						<Typography>Don't have an account?</Typography>
						<Link className="ml-4" to="/sign-up">
							Sign up
						</Link>
					</div>

					<form
						name="loginForm"
						noValidate
						className="mt-32 flex w-full flex-col justify-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<TextField
									id="email_otp"
									{...field}
									className="mb-24"
									label="Email"
									autoFocus
									type="email"
									error={!!errors.email}
									helperText={errors?.email?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<TextField
									id="password_otp"
									{...field}
									className="mb-24"
									label="Password"
									type="password"
									error={!!errors.password}
									helperText={errors?.password?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
							<Controller
								name="remember"
								control={control}
								render={({ field }) => (
									<FormControl>
										<FormControlLabel
											label="Remember me"
											control={
												<Checkbox
													size="small"
													{...field}
												/>
											}
										/>
									</FormControl>
								)}
							/>

							<Link
								className="text-md font-medium"
								to="/forgoten-password"
							>
								Forgot password?
							</Link>
						</div>

						<Button
							variant="contained"
							color="secondary"
							className=" mt-16 w-full"
							aria-label="Sign in"
							disabled={isEmpty(dirtyFields) || !isValid}
							type="submit"
							size="large"
						>
							Sign in
						</Button>
						<Button
                        onClick={handleGoogleSignIn}
							variant="outlined"
							startIcon={<GoogleIcon />}
							sx={{
								textTransform: 'none',
								width: '100%',
								mt: 2,
								borderColor: 'gray.200',
								'&:hover': {
									borderColor: 'gray.200',
									boxShadow: 'xl',
									backgroundColor: 'gray.50',
								},
							}}
							//   {...props}
						>
							Continue with Google
						</Button>

						{/*<div className="mt-32 flex items-center">*/}
						{/*    <div className="mt-px flex-auto border-t" />*/}
						{/*    <Typography className="mx-8" color="text.secondary">*/}
						{/*        Or continue with*/}
						{/*    </Typography>*/}
						{/*    <div className="mt-px flex-auto border-t" />*/}
						{/*</div>*/}

						{/*<div className="mt-32 flex items-center space-x-16">*/}
						{/*    <GoogleSignIn />*/}
						{/*    <GraphSignIn />*/}
						{/*</div>*/}
					</form>
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
					className="absolute -right-64 -top-64 opacity-20"
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
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								fill="currentColor"
							/>
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
			<Otp data={getValues()} />
		</div>
	);
}
export default withReducer(
	'authentication',
	combineReducers({
		accountconfirmation,
		otp,
	})
)(SignInPage);
