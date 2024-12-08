import {styled} from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import PlanOfTheDay from './widgets/PlanOfTheDay';
import HistoryItems from "./widgets/HistoryItems";

const Root = styled(FusePageSimple)(({theme}) => ({
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

function DeveloperDashboard(props) {
    return (
        <>
            <div className="flex flex-wrap justify-between">
                <div className="flex gap-3 items-center ">
                    <div className="p-3 shadow-box background-btn-color rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white"
                             className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path
                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                    </div>
                    <h3 className="font-medium">
                        Dashboard
                    </h3>
                </div>
                <div className="flex items-center gap-1">
                    <h3 className="font-light text-gray-600">
                        Overveiw
                    </h3>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none"
                             stroke="#5D54A4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-alert-circle">
                            <circle cx={12} cy={12} r={10}></circle>
                            <line x1={12} y1={8} x2={12} y2={12}></line>
                            <line x1={12} y1={16} x2={12.01} y2={16}></line>
                        </svg>
                    </div>
                </div>
            </div>
            <HistoryItems/>
            <PlanOfTheDay/>
        </>
    );
}

export default withReducer('developerDashboard', reducer)(DeveloperDashboard);
