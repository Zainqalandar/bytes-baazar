import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import { logoutUser, setUser } from 'app/store/userSlice';
import jwtService from './services/jwtService';
import useSnackbarMessage from '../main/hooks/useSnackbarMessage';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);
  const dispatch = useDispatch();
  const setSnackbarMessage = useSnackbarMessage();

  useEffect(() => {
    jwtService.on('onAutoLogin', () => {
      jwtService.getCurrentUserData().then((user) => {
        success(user);
      });
      /**
       * Sign in and retrieve user data with stored token
       */
    });
    jwtService.on('onLogin', (user) => {
      success(user, 'Signed in');
    });

    jwtService.on('onUserUpdated', (user) => {
      success(user, 'Profile Updated');
    });
    jwtService.on('onSSOUserCreated', () => {
      setSnackbarMessage('User successfully created. You can sign in now');
    });

    jwtService.on('onLogout', () => {
      pass('Signed out');
      dispatch(logoutUser());
    });

    jwtService.on('onAutoLogout', (message) => {
      pass(message);
      dispatch(logoutUser());
    });

    jwtService.on('onNoAccessToken', () => {
      pass();
    });

    jwtService.init();

    function success(user, message) {
      console.log("In sucess Function",user);
      if (message) {
        setSnackbarMessage(message);
      }
      Promise.all([
        // we haven't added the roles yet so by default its admin for now.
        // tempComment:
        dispatch(setUser({ ...user, role: user.role })),
        // You can receive data in here before app initialization
      ])
        .then((values) => {
          setWaitAuthCheck(false);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log(err, 'error loading');
        });
    }

    function pass(message) {
      if (message) {
        setSnackbarMessage(message);
      }
      setWaitAuthCheck(false);
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  return waitAuthCheck ? (
    <FuseSplashScreen />
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
