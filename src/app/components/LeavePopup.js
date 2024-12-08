import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import { showMessage } from 'app/store/fuse/messageSlice'; 
import Checkbox from '@mui/material/Checkbox';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,  FormControl,  FormControlLabel,  InputLabel,  Select,  TextField } from '@mui/material';
import { MenuItem } from '@material-ui/core';


const LeavePopup = () => {
    const [open, setOpen] = useState(false);
    const [editorContent, setEditorContent] = useState('');
    const [status, setStatus] = useState([]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' }, label: 'Half day' };
    const initialFormData = {
         description :  "" ,
         half_day : "",
         half_day_part :  "1",
         is_multiple : "",
         start_date :  "" ,
         end_date :  "" ,
         status_id : "",
         leave_type_id : 1
      }
      const dispatch = useDispatch();
      const { register, handleSubmit, setValue, watch,control, formState: { errors }, reset } = useForm({
        defaultValues: initialFormData
    });

      const handleClose = () => {
        setOpen(false);
        reset(initialFormData);
    };

    console.log('watch',watch())

    const handleEditorChange = (content) => {
        setEditorContent(content);
          setValue('description', content);
      };

    const onSubmit = (formData) => {
        createLeave(formData);
    };

    const createLeave = async (formData) => {
        try {
            console.log('formData', formData);
            const res = await axios.post("/leave/apply", formData);
            reset(); 
            dispatch(showMessage({ message: 'Leave successfully added!' }));
            setOpen(false);
        } catch (error) {
            console.error("Error creating project:", error);
            dispatch(showMessage({ message: error.message }));
        }
    };
    let fetchData = async () => {
      try {
          const resStatus = await axios.get("statuses");
          setStatus(resStatus.data.data);
      } catch (error) {
          console.error("Error fetching statuses:", error);
      }
  };
    useEffect(() => {
      fetchData();
    }, []);
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
        + Add leave
      </Button>

      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: '550px' } }}>
        <DialogTitle>Add leave</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ReactQuill
              theme="snow"
              value={watch().description}
              onChange={handleEditorChange}
            />
            {errors.message && <p>Description is required.</p>}

            <FormControlLabel
              control={
                <Controller
                  name="half_day"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      checked={field.value === 1}
                      onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                    />
                  )}
                />
              }
              label="Half day"
            />

            <FormControl sx={{ width: "100%"}} margin="dense">
              <InputLabel id="leave-type-label">Leave Type</InputLabel>
              <Select
                labelId="leave-type-label"
                id="leave-type"
                label="leave-type"
                // value={leaveType}
                // onChange={handleChange}
              >
                <MenuItem value="0">Half Day</MenuItem>
                <MenuItem value="1">Full Day</MenuItem>
              </Select>
            </FormControl>

            

            <FormControlLabel
              control={
                <Controller
                  name="is_multiple"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      checked={field.value === 1}
                      onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                    />
                  )}
                />
              }
              label="Is Multiple"
            />

            <TextField
              autoFocus
              margin="dense"
              id="start_date"
              label="Start date"
              name="start_date"
              type="date"
              fullWidth
              error={!!errors.start_date}
              InputProps={{
                style: { borderColor: errors.start_date ? "red" : undefined },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder=""
              {...register("start_date", {
                required: "Start date is required",
              })}
            />
            {errors.start_date && (
              <p style={{ color: "red" }}>{errors.start_date.message}</p>
            )}
            {watch().is_multiple === 1 && <TextField
              margin="dense"
              id="end_date"
              label="End date"
              type="date"
              name="end_date"
              fullWidth
              error={!!errors.end_date}
              InputProps={{
                style: { borderColor: errors.end_date ? "red" : undefined },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder=""
              {...register("end_date", {
                required: "End date is required",
              })}
            />}
            {errors.end_date && (
              <p style={{ color: "red" }}>{errors.end_date.message}</p>
            )}

            <FormControl
              sx={{ width: "100%" }}
              margin="dense"
              error={!!errors.status_id}
            >
              <InputLabel id="status-label">Status id</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status id"
                name="status_id"
                value={watch().status_id}
                {...register("status_id", {
                  required: "Status id is required",
                })}
              >
                {status?.map((statusItem) => (
                  <MenuItem key={statusItem.id} value={statusItem.id}>
                    {statusItem.status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LeavePopup