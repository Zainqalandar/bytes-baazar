import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ConfirmationDialog = ({ open, handleClose, handleConfirm }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this item?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
