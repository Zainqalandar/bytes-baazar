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
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    Select
} from '@mui/material';
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {showMessage} from 'app/store/fuse/messageSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import formatedTime from "src/app/utils/formatedTime.js";

const TaskLogPopup = ({getTaskLogs, taskLog = null, setTaskLog}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState([]);
    const [editorContent, setEditorContent] = useState('');
    const initialFormData = {
        id: "",
        project_id: "",
        task_details: "",
        minutes: "",
        hours: "",
    };
    const {register, formState: {errors}, reset, watch, setValue, handleSubmit} = useForm(
        {
            defaultValues: initialFormData
        }
    );


    const handleEditorChange = (content) => {
        setEditorContent(content);
        setValue('task_details', content);
    };




    const handleClose = () => {
        setOpen(false);
        reset(initialFormData);
    };

    const createUser = async (formData) => {
        try {
            console.log('formData', formData);
            const res = await axios.post("add/today-report", formData);
            reset();
            dispatch(showMessage({message: 'Report successfully added!'}));
            setOpen(false);
        } catch (error) {
            console.error("Error creating project:", error);
            dispatch(showMessage({message: error.message}));
        }
        getTaskLogs();
    };

    let getMultiSelectors = async () => {
        try {
            const resProject = await axios.get("get/team/projects");
            setProject(resProject.data.data);
        } catch (error) {
            console.error("Error fetching statuses:", error);
        }
    };
    const updateUser = async (formData) => {
        console.log('formData', formData)
        try {
            const res = await axios.put(`update/today-report/${taskLog.id}`, formData);
            reset(initialFormData);
            dispatch(showMessage({message: 'Report successfully updated!'}));
        } catch (error) {
            console.error("Error updating user:", error);
        }
        getTaskLogs();
        setTaskLog(null);
        setOpen(false);
    };



    useEffect(() => {

        if (taskLog) {
            const { hours, remainingMinutes } = formatedTime(taskLog.time);
            setOpen(true);
            reset({
                id: taskLog.id,
                task_details: taskLog.description,
                hours: hours,
                minutes: remainingMinutes,
                project_id: taskLog["project"]["id"]
            });
        } else {
            getMultiSelectors();
        }
    }, [taskLog]);

    const onSubmit = (formData) => {
        if (taskLog) {
            updateUser(formData);
        } else {
            createUser({...formData, is_updated: 1});
        }
    };

    console.log('Watch', watch(), taskLog)



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
                + Add Task Log
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {taskLog ? "Edite Tasklog" : "Create Tasklog"}
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            autoFocus
                            sx={{width: "100%"}}
                            margin="dense"
                            error={!!errors.status_id}
                        >
                            <InputLabel id="project_id">Project id</InputLabel>
                            <Select
                                labelId="project_id"
                                id="project_id"
                                label="Status id"
                                name="project_id"
                                value={watch().project_id}
                                {...register("project_id", {
                                    required: "Project id is required",
                                })}
                            >
                                {project?.map((projectItem) => (
                                    <MenuItem key={projectItem.id} value={projectItem.id}>
                                        {projectItem.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {errors.status_id && (
                            <p style={{color: "red"}}>{errors.status_id.message}</p>
                        )}
                        <ReactQuill
                            theme="snow"
                            value={watch().task_details}
                            onChange={handleEditorChange}
                        />
                        {errors.message && <p>task_details is required.</p>}


                        <TextField
                            margin="dense"
                            id="hours"
                            label="Hours"
                            name="hours"
                            type="text"
                            sx={{width: "100%"}}
                            {...register("hours", {required: "Hours is required"})}
                        />
                        {errors.hours && (
                            <p style={{color: "red"}}>{errors.hours.message}</p>
                        )}

                        <TextField
                            margin="dense"
                            id="minutes"
                            label="Minutes"
                            name="minutes"
                            type="text"
                            sx={{width: "100%"}}
                            {...register("minutes", {required: "Minutes is required"})}
                        />
                        {errors.minutes && (
                            <p style={{color: "red"}}>{errors.minutes.message}</p>
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

export default TaskLogPopup;
