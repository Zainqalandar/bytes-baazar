import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useThemeMediaQuery } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer, { getAgent } from './store/agentSlice';
import NoUserFound from '../shared-components/NoUserFound';
import AgentProfileHeader from './AgentProfileHeader';

const FileManagerApp = lazy(() => import('src/app/main/apps/filemanager/FileManagerApp'));
const AgentDashboardTab = lazy(() => import('./tabs/AgentDashboardTab'));
const CalendarView = lazy(() => import('src/app/main/apps/calendar/CalendarView'));

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    '& > .container': {
      maxWidth: '100%',
    },
  },
}));

function Agent() {
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [noAgent, setNoAgent] = useState(false);

  const dispatch = useDispatch();

  const routeParams = useParams();
  const { agentId } = routeParams;

  useEffect(() => {
    dispatch(getAgent(agentId)).then((action) => {
      if (!action.payload) {
        setNoAgent(true);
      }
    });
  }, [dispatch, agentId]);
  return noAgent ? (
    <NoUserFound type="agent" url="users/agents" />
  ) : (
    <Root
      header={<AgentProfileHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
      content={
        <div className="mx-auto flex w-full max-w-5xl flex-auto justify-center p-24 sm:p-32">
          {selectedTab === 0 && <AgentDashboardTab />}
          {selectedTab === 1 && <CalendarView scroll="page" />}
          {selectedTab === 2 && <FileManagerApp />}
        </div>
      }
      // tempComment: Need to look into this
      scroll={isMobile ? 'page' : 'page'}
    />
  );
}

export default withReducer('agent', reducer)(Agent);
