import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useThemeMediaQuery } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import EntrepreneurProfileHeader from './EntrepreneurProfileHeader';
import reducer, { getEntrepreneur } from './store/entrepreneurSlice';
import NoUserFound from '../shared-components/NoUserFound';

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

const FileManagerApp = lazy(() => import('src/app/main/apps/filemanager/FileManagerApp'));
const EntrepreneurDashboardTab = lazy(() => import('./tabs/EntrepreneurDashboardTab'));
const CalendarView = lazy(() => import('src/app/main/apps/calendar/CalendarView'));

function Entrepreneur() {
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [noEntrepreneur, setNoEntrepreneur] = useState(false);

  const dispatch = useDispatch();

  const routeParams = useParams();
  const { entrepreneurId } = routeParams;

  useEffect(() => {
    dispatch(getEntrepreneur(entrepreneurId)).then((action) => {
      if (!action.payload) {
        setNoEntrepreneur(true);
      }
    });
  }, [dispatch, entrepreneurId]);

  return noEntrepreneur ? (
    <NoUserFound type="prospect" url="users/prospects" />
  ) : (
    <Root
      header={
        <EntrepreneurProfileHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      }
      content={
        <div className="mx-auto flex w-full max-w-5xl flex-auto justify-center p-24 sm:p-32">
          {selectedTab === 0 && <EntrepreneurDashboardTab />}
          {selectedTab === 1 && <h1>Messages</h1>}
          {selectedTab === 2 && <CalendarView scroll="page" />}
          {selectedTab === 3 && <FileManagerApp />}
        </div>
      }
      // tempComment: Need to look into this
      scroll={isMobile ? 'page' : 'page'}
    />
  );
}

export default withReducer('entrepreneur', reducer)(Entrepreneur);
