import React from 'react';
import { selectColorState } from './store/teamSlice';
import { selectQuickPanelState } from 'app/theme-layouts/shared-components/quickPanel/store/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { toggleColor } from './store/teamSlice';

const TeamOne = () => {
  const dispatch = useDispatch()
	const color = useSelector((state) => state.teamOne.color.state);

  const handleToggleColor = () => {
    dispatch(toggleColor())
  }
	console.log(color, 'color');
	return (
		<div>
			<Button
      onClick={handleToggleColor}
				sx={{
					bgcolor: color,
				}}
			>
				toggleColor
			</Button>
			<h1>Team One</h1>
		</div>
	);
};

export default TeamOne;
