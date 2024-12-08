import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {showMessage} from 'app/store/fuse/messageSlice';

const PopupForm = ({getTeams, team = null, setTeam}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const initialFormData = {
        id: "",
        name: "",
        slug: "",
    };

    const {register, handleSubmit, setValue, formState: {errors}, reset, watch} = useForm();


    useEffect(() => {
        if (team) {
            setOpen(true);
            reset({
                id: team.id,
                name: team.name,
                slug: team.slug,
            });
        }
    }, [team]);

    const createTeam = async (formData) => {
        try {
            const res = await axios.post("team", formData);
            reset(initialFormData);
            dispatch(showMessage({message: 'Team successfully added!'}));
            setOpen(false);
        } catch (error) {
            console.error("Error creating team:", error);
            dispatch(showMessage({message: error.message}));
        }
        getTeams();
    };

    const updateTeam = async (formData) => {
        try {
            const res = await axios.put(`team/${team.id}`, formData);
            reset(initialFormData);
            dispatch(showMessage({message: 'Team successfully updated!'}));
        } catch (error) {
            console.error("Error updating team:", error);
            dispatch(showMessage({message: error.message}));
        }
        getTeams();
        setTeam(null);
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        setTeam(null);
        reset(initialFormData);
    };


    const preventNumericInput = (e) => {
        if (/\d/.test(e.key)) {
            e.preventDefault();
        }
    };

    const onSubmit = (formData) => {
        if (team) {
            updateTeam(formData);
        } else {
            createTeam(formData);
        }
    };


    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                style={{backgroundColor: "rgba(70, 70, 127, 1)", color: "white", padding: "10px 52px"}}
            >
                + Add Team
            </Button>

            <Dialog open={open} onClose={handleClose} PaperProps={{style: {width: '550px'}}}>
                <DialogTitle>{team ? "Edit Team" : "Add Team"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                            {...register("name", {
                                required: "Name is required", pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message:
                                        "First name should only contain alphabetic characters",
                                },
                            })}
                            onKeyDown={preventNumericInput}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{team ? "Update" : "Submit"}</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PopupForm;
