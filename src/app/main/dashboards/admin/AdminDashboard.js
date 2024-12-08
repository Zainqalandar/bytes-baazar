import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import ArrowRightButton from 'app/shared-components/ArrowRightButton';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import UsersDashboardHeader from '../shared-components/UsersDashboardHeader';
import reducer from './store';

const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
    },
    '& .FusePageSimple-toolbar': {},
    '& .FusePageSimple-content': {},
    '& .FusePageSimple-sidebarHeader': {},
    '& .FusePageSimple-sidebarContent': {},
}));

function AdminDashboard(props) {
    return (
        <Root
            header={
                <UsersDashboardHeader
                    buttons={
                        <ArrowRightButton
                            to="/apps/profile"
                            component={Link}
                            title="My Account"
                            className="bg-custom-purple"
                        />
                    }
                />
            }
            content={
                <div className="my-36 flex flex-1 flex-col gap-16">
                    <h1>Admin Dashboard</h1>
                </div>
            }
        />
    );
}
export default withReducer('adminDashboard', reducer)(AdminDashboard);
