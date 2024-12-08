// import '@mock-api';
import BrowserRouter from '@fuse/core/BrowserRouter';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import {SnackbarProvider} from 'notistack';
import {useSelector} from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {selectCurrentLanguageDirection} from 'app/store/i18nSlice';
import {selectUser} from 'app/store/userSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import {selectMainTheme} from 'app/store/fuse/settingsSlice';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import settingsConfig from 'app/configs/settingsConfig';
// import {PublicClientApplication, EventType} from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';
// import {msalConfig} from 'src/authConfig';
import withAppProviders from './withAppProviders';
import {AuthProvider} from './auth/AuthContext';
import JwtService from './auth/services/jwtService';
// import axios from 'axios';
/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const emotionCacheOptions = {
    rtl: {
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
        insertionPoint: document.getElementById('emotion-insertion-point'),
      },
      ltr: {
        key: 'muiltr',
        stylisPlugins: [],
        insertionPoint: document.getElementById('emotion-insertion-point'),
      },
    };
    
    const App = () => {
    // const msalInstance = new PublicClientApplication(msalConfig);
    // const handleCredentialResponse = async (response) => {
    //     JwtService.handleGoogleRedirect(response.credential);
    // };
    // useEffect(() => {
    //     window.google?.accounts.id.initialize({
    //         client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    //         callback: handleCredentialResponse,
    //     });
    // }, []);

    // msalInstance.addEventCallback((event) => {
    //     if (event.eventType === EventType.LOGIN_SUCCESS) {
    //         msalInstance.setActiveAccount(event.payload.account);
    //     }
    // });

    const user = useSelector(selectUser);
    const langDirection = useSelector(selectCurrentLanguageDirection);
    const mainTheme = useSelector(selectMainTheme);

    return (
      <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
          <FuseTheme theme={mainTheme} direction={langDirection}>
            <AuthProvider>
              <BrowserRouter>
                <FuseAuthorization
                  userRole={user.role}
                  loginRedirectUrl={settingsConfig.loginRedirectUrl}
                >
                  <SnackbarProvider
                    maxSnack={5}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    classes={{
                      containerRoot:
                        "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
                    }}
                  >
                    <FuseLayout layouts={themeLayouts} />
                  </SnackbarProvider>
                </FuseAuthorization>
              </BrowserRouter>
            </AuthProvider>
          </FuseTheme>
      </CacheProvider>
    );
};

export default withAppProviders(App)();
