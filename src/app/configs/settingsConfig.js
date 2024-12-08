import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';
import authRoles from "../auth/authRoles";

const settingsConfig = {
    layout: {
        style: 'defaultLayout', // layout1 layout2 layout3
        config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout/LayoutConfig.js
    },
    customScrollbars: true,
    direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
    theme: {
        main: themesConfig.defaultDark,
        navbar: themesConfig.defaultDark,
        toolbar: themesConfig.defaultDark,
        footer: themesConfig.defaultDark,
    },
    /*
     To make whole app auth protected by default set defaultAuth:['administrator','staff','user']
     To make whole app accessible without authorization by default set defaultAuth: null
     *** The individual route configs which has auth option won't be overridden.
     */
    defaultAuth: authRoles.all,
    /*
      Default redirect url for the logged-in user,
     */
    loginRedirectUrl: '/',
    // userDefaultRoute:{
    //   administrator:"/",
    //   staff:"/",
    //   user:"/"
    // }
};

export default settingsConfig;
