import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
	selectFuseCurrentLayoutConfig,
	selectToolbarTheme,
} from 'app/store/fuse/settingsSlice';
import NotificationPanelToggleButton from '../../shared-components/notificationPanel/NotificationPanelToggleButton';
import NavbarToggleButton from '../../shared-components/NavbarToggleButton';
import UserMenu from '../../shared-components/UserMenu';
import HeaderFullScreenToggle from 'app/theme-layouts/shared-components/FullScreenToggle';
import LanguageSwitcher from 'app/theme-layouts/shared-components/LanguageSwitcher';
import FuseSettingsViewerDialog from 'app/theme-layouts/shared-components/FuseSettingsViewerDialog';
import SettingsPanel from 'app/theme-layouts/shared-components/SettingsPanel';
import NavigationSearch from 'app/theme-layouts/shared-components/NavigationSearch';

function ToolbarLayout(props) {
	const config = useSelector(selectFuseCurrentLayoutConfig);
	const toolbarTheme = useSelector(selectToolbarTheme);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(
					'relative z-20 flex border-b-1 shadow-0',
					props.className
				)}
				color="default"
				style={{
					backgroundColor: toolbarTheme.palette.background.paper,
				}}
			>
				<Toolbar className="container min-h-48 p-0 md:min-h-64">
					{config.navbar.display && (
						<Hidden lgUp>
							<NavbarToggleButton className="mx-0 h-40 w-40 p-0 sm:mx-8" />
						</Hidden>
					)}

					<div className="flex flex-1" />

					<div className="flex h-full items-center overflow-x-auto px-8 md:px-0">
                        <SettingsPanel />
                        <FuseSettingsViewerDialog />
						<LanguageSwitcher />
						<NavigationSearch />
						<HeaderFullScreenToggle />
						<NotificationPanelToggleButton />
						<UserMenu />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default memo(ToolbarLayout);
