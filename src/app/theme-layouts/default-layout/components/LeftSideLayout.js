import {memo} from 'react';
import Logo from "app/theme-layouts/shared-components/Logo";
import FuseScrollbars from "@fuse/core/FuseScrollbars/FuseScrollbars";
import Navigation from "app/theme-layouts/shared-components/Navigation";
import NavbarToggleButton from "app/theme-layouts/shared-components/NavbarToggleButton";
import UserNavbarHeader from "app/theme-layouts/shared-components/UserNavbarHeader";
import {styled} from "@mui/material/styles";
import Hidden from '@mui/material/Hidden';

const StyledContent = styled(FuseScrollbars)(({theme}) => ({
    overscrollBehavior: 'contain',
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 10px',
    backgroundAttachment: 'local, scroll',
    height: '100%', // Ensure it takes full height
}));

function LeftSideLayout() {
    return (
        <Hidden lgDown>
            <aside className="hidden md:block w-[230px] h-screen border-1 overflow-auto">
                {/* <div className="flex flex-row items-center shrink-0 h-46 md:h-72 px-20">
                    <div className="flex flex-1 mx-4">
                        <Logo/>
                    </div> */}

                    {/*<NavbarToggleButton className="w-40 h-40 p-0"/>*/}
                {/* </div> */}

                <StyledContent
                    className="flex flex-1 flex-col min-h-0"
                    option={{suppressScrollX: true, wheelPropagation: false}}
                >
                    <UserNavbarHeader/>

                    <Navigation layout="vertical"/>

                    <div className="flex flex-0 items-center justify-center py-48 opacity-10">
                        <img className="w-full max-w-64" src="assets/images/logo/logo.png" alt="footer logo"/>
                    </div>
                </StyledContent>
            </aside>
        </Hidden>);
}

export default memo(LeftSideLayout);
