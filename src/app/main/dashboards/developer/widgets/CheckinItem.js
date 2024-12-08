import {memo, useState} from 'react';
import {checkin, checkout} from "../store/widgetsSlice";
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from 'app/store/userSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function CheckinItem() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false);
    /**
     * Form Checkin
     */
    function onCheckin(ev) {
        ev.preventDefault();
        dispatch(checkin());
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
    const handleCheckout = (ev) => {
        ev.preventDefault();
        dispatch(checkout());;
    };

    return (
        <div className="relative p-6 text-white flex flex-col gap-10 w-full rounded background-color ">
            <img className="absolute h-full top-0 right-0" src="assets/images/ks/circle.svg"/>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h4 className="text-lg">XXX XXX</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                         className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </div>
                <h5 className="text-2xl font-medium">
                    { !user.is_checkin && <button
                        className="dropbtn shadow-box background-color-on-hold rounded px-3 py-1 text-white"
                        onClick={onCheckin}
                    >
                        Check-in
                    </button>
                    }
                    {user.is_checkin && <button
                        className="dropbtn shadow-box background-color-on-hold rounded px-3 py-1 text-white"
                        onClick={onCheckout}
                    >
                        Check-Out
                    </button>
                    }
                </h5>
            </div>
            <div>
                Increased bt X%
            </div>
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
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleCheckout} autoFocus>
                        Checkout
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default memo(CheckinItem);
