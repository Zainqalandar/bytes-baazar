import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import ArrowRightButton from 'app/shared-components/ArrowRightButton';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import UsersDashboardHeader from '../shared-components/UsersDashboardHeader';
import reducer from './store';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import { selectUser } from 'app/store/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import {useState} from "react";
import {checkin, checkout} from "./store/widgetsSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from '@mui/material/Button';
import useDispatchSnackbar from 'src/app/main/hooks/useDispatchSnackbar';
import useSnackbarMessage from 'src/app/main/hooks/useSnackbarMessage';
import history from '@history';
import HistoryItems from './widgets/HistoryItems';

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
const container = {
    show: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};


const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};
const DetailItem = ({ title, value }) => {
    return (
        <>
            <Typography className="mb-4 text-15 font-semibold">{title}</Typography>
            <Typography>{value}</Typography>
        </>
    );
};
function DeveloperDashboard(props) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false);
    const dispatchWithSnackbar = useDispatchSnackbar();
    const setSnackbarMessage = useSnackbarMessage();
    /**
     * Form Checkin
     */
    function onCheckin(ev) {
        ev.preventDefault();
        dispatchWithSnackbar(checkin(),{
            success: 'Checkin successfully!',
            error: 'Error Occurred',
        });
        // dispatch(checkin());
    }
    /**
     * Form Checkin
     */
    function onCheckout() {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleCheckout = async (ev) => {
        ev.preventDefault();

        // dispatch(
        //     checkout()
        // )
        //     .then((res) => {
        //         if (!res.error) {
        //             setOpen(false);
        //             setSnackbarMessage('Scoreboard updated');
        //         }
        //         console.log('pppppppppp')
        //         console.log(res)
        //         throw new Error('ABC');
        //     })
        //     .catch((err) => setSnackbarMessage(err.message));
        let res = await dispatchWithSnackbar(checkout({'do_tomorrow': 'enjoy'}), {
            success: 'Checkout successfully!',
            error: 'Error Occurred',
        });
        if(res?.payload?.error){
            history.push('/create-task-log')
        }
        console.log(res, "*********")
        handleClose()
    };
    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

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
                <div className="my-36 flex flex-1 flex-col gap-16 m-10">
                    <h1>{capitalizeFirstLetter(user.role)} Dashboard</h1>
                    <Card component={motion.div} variants={item} className="mb-32 w-full">
                        <div className="px-32 pt-24">
                            <Typography className="text-2xl font-semibold leading-tight">
                                General Information
                            </Typography>
                        </div>

                        <CardContent className="px-32 py-24">
                            <div className="text-2xl font-medium">
                                { !user.is_checkin &&
                                    <Button onClick={onCheckin} color="secondary">
                                        Check-in
                                    </Button>
                                }
                                {user.is_checkin &&
                                    <Button onClick={onCheckout} color="secondary">
                                        Check-Out
                                    </Button>
                                }
                            </div>
                        </CardContent>
                    </Card>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"KSPS CHECKOUT"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to checkout ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCheckout} color="primary">
                                Checkout
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <HistoryItems />
                </div>
            }
        />
    );
}
export default withReducer('adminDashboard', reducer)(DeveloperDashboard);
