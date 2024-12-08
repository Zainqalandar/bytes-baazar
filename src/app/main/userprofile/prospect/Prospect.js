import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeMediaQuery } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer, { getProspect, selectProspect } from './store/prospectSlice';
import NoUserFound from '../shared-components/NoUserFound';
import ProspectProfileHeader from './ProspectProfileHeader';

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

function Prospect() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [noProspect, setNoProspect] = useState(false);

  const user = useSelector(selectProspect);

  const dispatch = useDispatch();

  const routeParams = useParams();
  const { prospectId } = routeParams;

  useEffect(() => {
    dispatch(getProspect(prospectId)).then((action) => {
      if (!action.payload) {
        setNoProspect(true);
      }
    });
  }, [dispatch, prospectId]);

  return noProspect ? (
    <NoUserFound type="prospect" url="apps/prospects" />
  ) : (
    <Root
      header={<ProspectProfileHeader user={user} />}
      content={
        <div className="mx-auto flex w-full max-w-5xl flex-auto justify-center p-24 sm:p-32">
          <h1>Prospect profile</h1>
        </div>
      }
      // tempComment: Need to look into this
      scroll={isMobile ? 'page' : 'page'}
    />
  );
}

export default withReducer('prospect', reducer)(Prospect);
