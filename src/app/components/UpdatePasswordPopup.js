
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice'; 
import { useLocation, useNavigate } from 'react-router-dom';



const UpdatePasswordPopup = ({PopupOpen, HandleClose}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        code: '',
        password: ''
    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
        try {
            const res = await axios.post("/password/reset", formData);
            dispatch(showMessage({ message: "Password successfully updated!" }));
            navigate('/sign-in');
          } catch (error) {
            dispatch(showMessage({ message: error.message }));
          }
        setFormData({
            email: '',
            code: '',
            password: ''
        });
        HandleClose();
    };

   
  return (
    <Dialog open={PopupOpen} onClose={HandleClose} >
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="code"
                        name="code"
                        label="Code"
                        type="text"
                        fullWidth
                        value={formData.code}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                    />
                        <DialogActions>
                            <Button onClick={HandleClose}>Cancel</Button>
                            <Button type="submit">Update</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
  )
}

export default UpdatePasswordPopup