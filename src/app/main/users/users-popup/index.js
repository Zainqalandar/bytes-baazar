import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import {showMessage} from 'app/store/fuse/messageSlice';

const UsersPopup = ({getUsers, user = null, setUser}) => {
    const dispatch = useDispatch();
    const initialFormData = {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        team_id: "",
        role_id: "",
    };
    const {register, handleSubmit, setValue, formState: {errors}, reset, watch} = useForm();
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState([]);
    const [teams, setTeams] = useState([]);



    useEffect(() => {
        if (user) {
            setOpen(true);
            reset({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                team_id: user.teams[0].id,
                role_id: user.roles[0].id
            });
        } else {
            getMultiSelectors();
        }
    }, [user]);

    const handleClose = () => {
        setOpen(false);
        reset(initialFormData);
        if(user){
            setUser(null);
        }
    };


    const createUser = async (formData) => {
        try {
            const res = await axios.post("user", formData);
            console.log(res, 'res')
            if (res.status === 201) {
                reset(initialFormData);
                dispatch(showMessage({message: 'User successfully added!'}));
                setOpen(false);
                getUsers()
            }
        } catch (error) {
            dispatch(showMessage({message: error.message}));
        }
    };

    let getMultiSelectors = async () => {
        try {
            const resTeams = await axios.get("teams");
            const resRoles = await axios.get("roles");
            setTeams(resTeams.data.data);
            setRoles(resRoles.data.data);
        } catch (error) {
            console.error("Error fetching teams and roles:", error);
            dispatch(showMessage({message: error.message}));
        }
    };

    const updateUser = async (formData) => {
        try {
            const res = await axios.put(`user/${user.id}`, formData);
            if (res.status === 201) {
                reset(initialFormData);
                dispatch(showMessage({message: 'User successfully Updated!'}));
            }
        } catch (error) {
            console.error("Error updating user:", error);
            dispatch(showMessage({message: error.message}));
        }
        getUsers();
        setUser(null);
        setOpen(false);
        dispatch(showMessage({message: 'User successfully updated!'}));
    };

    const onSubmit = (formData) => {
        if (user) {
            updateUser(formData);
        } else {
            createUser(formData);
        }
    };

    const preventNumericInput = (e) => {
        if (/\d/.test(e.key)) {
            e.preventDefault();
        }
    };


    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                style={{
                    backgroundColor: "rgba(70, 70, 127, 1)",
                    color: "white",
                    padding: "10px 52px",
                }}
            >
                + Add User
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="first-name"
                            label="First Name"
                            name="first_name"
                            type="text"
                            fullWidth
                            error={!!errors.first_name}
                            InputProps={{
                                style: {borderColor: errors.first_name ? "red" : undefined},
                            }}
                            {...register("first_name", {
                                required: "First name is required",
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message:
                                        "First name should only contain alphabetic characters",
                                },
                            })}
                            onKeyDown={preventNumericInput}
                        />
                        {errors.first_name && (
                            <p style={{color: "red"}}>{errors.first_name.message}</p>
                        )}
                        <TextField
                            margin="dense"
                            id="last-name"
                            label="Last Name"
                            type="text"
                            name="last_name"
                            fullWidth
                            error={!!errors.last_name}
                            InputProps={{
                                style: {borderColor: errors.last_name ? "red" : undefined},
                            }}
                            {...register("last_name", {
                                required: "Last name is required",
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message:
                                        "Last name should only contain alphabetic characters",
                                },
                            })}
                            onKeyDown={preventNumericInput}
                        />
                        {errors.last_name && (
                            <p style={{color: "red"}}>{errors.last_name.message}</p>
                        )}

                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            name="email"
                            fullWidth
                            error={!!errors.email}
                            InputProps={{
                                style: {borderColor: errors.email ? "red" : undefined},
                            }}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p style={{color: "red"}}>{errors.email.message}</p>
                        )}

                        <FormControl fullWidth margin="dense" error={!!errors.team_id}>
                            <InputLabel id="team-label">Team</InputLabel>
                            <Select
                                labelId="team-label"
                                id="team"
                                label="Team"
                                name="team_id"
                                value={watch().team_id}
                                {...register("team_id", {required: "Team is required"})}
                            >
                                {teams.map((team) => (
                                    <MenuItem key={team.id} value={team.id}>
                                        {team.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {errors.team_id && (
                            <p style={{color: "red"}}>{errors.team_id.message}</p>
                        )}

                        <FormControl fullWidth margin="dense" error={!!errors.role_id}>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                label="Role"
                                name="role_id"
                                value={watch().role_id}
                                {...register("role_id", {required: "Role is required"})}
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role.id} value={role.id}>
                                        {role.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {errors.role_id && (
                            <p style={{color: "red"}}>{errors.role_id.message}</p>
                        )}

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UsersPopup;
