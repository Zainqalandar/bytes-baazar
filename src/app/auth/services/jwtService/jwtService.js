import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCOUNT_PENDING_ERROR } from 'src/app/main/const';
import jwtServiceConfig from './jwtServiceConfig';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, auth } from 'src/app/main/sign-in/firebase';
import { apiUrl } from './jwtServiceConst';
import service from 'src/app/main/appwrite/userServices';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    // this.setInterceptors();
    // this.setBaseUrl();
    this.handleAuthentication();
  }

  setTokenHeader = (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  };

  setBaseUrl = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL + apiUrl;
  };

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response?.status === 401 && err.config && !err.config?.__isRetryRequest) {
          // if you ever get an unauthorized response, logout the user
          // this.emit('onAutoLogout', 'Invalid access_token');
          this.removeAccessToken();
        }
        throw err;
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();
    console.log('handleAuthentication', access_token)
    if (!access_token) {
      this.emit('onNoAccessToken');
      this.emit('onAutoLogout', '');
    } else {
      // this.setTokenHeader(access_token);
      this.emit('onAutoLogin', true);
    }
  };

  handleSSORedirect = (type, code) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/login/${type}/callback?code=${code}`)
        .then((response) => {
          if (response.data) {
            const { access_token, token_expiry_minutes } = response.data;
            const token = { access_token, token_expiry_minutes };
            this.setSession(token);
            this.emit('onAutoLogin', true);
            resolve(response.data);
          }
        })
        .catch((err) => {
          const { error } = err.response.data;
          if (error.startsWith('User not found')) {
            const email = error.split(':')[1];
            this.createUser({ email, name: email.split('@')[0] }).then((res) => {
              this.emit('onSSOUserCreated', true);
              resolve('onSSOUserCreated');
            });
          } else if (error === ACCOUNT_PENDING_ERROR) {
            resolve('onSSOUserPending');
          }
        });
    });
  };

  getUserData = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${jwtServiceConfig.getUser}/${id}`)
        .then((response) => {
          // we will need it in future. Handling will depend on what we want to do with the response.
          // if (response.data.data) {
          // }
        })
        .catch((err) => console.log(err, 'error data'));
    });
  };

  // getCurrentUserData = () => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(`${jwtServiceConfig.getCurrentUser}`)
  //       .then((response) => {
  //         resolve(response.data.data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };

  getCurrentUserData = async () => {
    try {
          const response = await service.getUserDetail();
          const userDetail = response.documents[0];
          return userDetail
    } catch (err) {
      throw err;
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(jwtServiceConfig.signUp[this.getUserInStorage()], data)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((err) => reject(this.rejectWithError(err)));
    });
  };

  rejectWithError = (err) =>
    FuseUtils.stringifyAndParse([
      {
        type: err.response?.data?.error || '',
        message: err.response?.data?.message || err.response?.data?.error || 'Unknown Error',
      },
    ]);

  ssoLogin = (param) => {
    return new Promise((resolve, reject) => {
      axios
        .get(jwtServiceConfig.sso[param], {})
        .then((response) => {
          window.location.href = response.data.redirect_url;
        })
        .catch((err) => {
          reject(this.rejectWithError(err));
        });
    });
  };

  // signInWithCredentials = ({ email, password, remember }, otp_code) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(jwtServiceConfig.signIn, {
  //         username: email,
  //         password,
  //         otp_code,
  //       })
  //       .then((response) => {
  //         if (response && response.data) {
  //           const { access_token, token_expiry_minutes } = response.data;
  //           const token = { access_token, token_expiry_minutes };
  //           this.setTokenHeader(access_token);
  //           this.getCurrentUserData()
  //             .then((user) => {
  //               const userWithRole = { ...user, role: user.roles[0] };
  //               resolve(userWithRole);
  //               this.emit('onLogin', userWithRole);
  //               // non persistent session
  //               if (!remember) {
  //                 token.token_expiry_minutes = null;
  //               }
  //               this.setSession(token);
  //             })
  //             .catch((err) => console.log(err, 'error getting current user'));
  //         }
  //       })
  //       .catch((err) => {
  //         reject(this.rejectWithError(err));
  //       });
  //   });
  // };

  signInWithCredentials = async () => {
    try {

      const result = await signInWithPopup(auth, googleProvider);
          const user = await result.user;

          const token = await user.accessToken
        // this.setSession(token);
        this.setAccessToken('access_token', token);
      // const response = await axios.post(jwtServiceConfig.signIn, {
      //   username: email,
      //   password,
      //   otp_code,
      // });
  
      if (user) {
        // const { access_token, token_expiry_minutes } = response.data;
        // const token = { access_token, token_expiry_minutes };
        
        // Set token header
        // this.setTokenHeader(access_token);
  
        // Get current user data
        const user = await this.getCurrentUserData();
        let userWithRole = { ...user, role: user.roles[0] };

        console.log('userWithRole', userWithRole)
        
        // Resolve the user object
        this.emit('onLogin', userWithRole);
        // resolve(userWithRole);
  
        // Set session based on remember flag
        // if (!remember) {
        //   token.token_expiry_minutes = null;
        // }
        
        return userWithRole;
      }

    } catch (err) {
      // Handle error and reject with the error object
      // reject(this.rejectWithError(err));
      console.log('error', err)
    }
  };
  

  updateUserData = (user) => {
    return new Promise((resolve, reject) => {
      return axios
        .post(`${jwtServiceConfig.updateUser}/${user.id}`, {
          user,
        })
        .then((res) => {
          if (res.data) {
            resolve(res.data);
            this.emit('onUserUpdated', res.data);
          } else {
            resolve(user);
          }
        })
        .catch((error) => {
          this.emit('onUserUpdated', user);
          reject(error);
        });
    });
  };

  setSession = (token) => {
    // const { access_token, token_expiry_minutes } = token;
    if (token) {
      // this.setTokenHeader(access_token);
      this.setAccessToken('access_token', token);
    } else {
      this.setTokenHeader();
    }
  };

  logout = () => {
    this.removeAccessToken();
    this.emit('onLogout', 'Logged out');
  };

  setAccessToken = (name, data, expiryMinutes = 60) => {
    // expiry minutes converted to days
    Cookies.set(name, data, {
      ...(expiryMinutes ? { expires: expiryMinutes / (24 * 60) } : {}),
    });
  };

  getAccessToken = () => {
    return Cookies.get('access_token');
  };

  removeAccessToken = () => {
    return Cookies.remove('access_token');
  };

  setUserInStorage = (userType) => {
    localStorage.setItem('user_type', userType);
  };

  getUserInStorage = () => {
    return localStorage.getItem('user_type');
  };


  // todo: Checkin APIs can be move into separate slice

  checkin = () => {
    //this.removeAccessToken();
    //this.emit('check-in', 'Check in');
  };
}

const instance = new JwtService();

export default instance;
