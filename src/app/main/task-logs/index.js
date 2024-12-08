import { Button } from '@mui/material';
import TitleWrapper from 'app/shared-components/TitleWrapper';
import WYSIWYGEditor from 'app/shared-components/WYSIWYGEditor';
import { showMessage } from 'app/store/fuse/messageSlice';
import Chat from 'app/theme-layouts/shared-components/chatPanel/Chat';
import ChatPanel from 'app/theme-layouts/shared-components/chatPanel/ChatPanel';
import ContactList from 'app/theme-layouts/shared-components/chatPanel/ContactList';
import QuickPanel from 'app/theme-layouts/shared-components/quickPanel/QuickPanel';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toggleQuickPanel } from 'app/theme-layouts/shared-components/quickPanel/store/stateSlice';
import PlanOfTheDay from '../dashboards/developer/widgets/PlanOfTheDay';
const TaskLogs = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'taskLogs/getTaskLogs'
        })
    }
    , [dispatch])

    const handleGetUsers =async () => {

    
        const signOutData = {
            message: "You have successfully signed out.",
            variant: "info",
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
        };

        // dispatch(showMessage({message}));
        dispatch(showMessage(signOutData));

        // try {
            // const response = await axios.get('/api/users')
            // success message
            // dispatch({
            //     type: 'taskLogs/getUsers',
            //     payload: response.data
            // })
            

        // } catch (error) {
        //     console.log(error)
        // }
    }

    const toggleQuick = () => {
        dispatch(toggleQuickPanel())
        console.log('toggleQuickPanel')
    }




    return (
        <>

        <Button onClick={handleGetUsers}>Get Users</Button>

            {/* <TitleWrapper title=' There are not title ' className='border-1 border-red-800 w-[900px]' >
                <WYSIWYGEditor />
                </TitleWrapper> */}

                <QuickPanel />
                <Button onClick={toggleQuick}>Toggle QuickPanel</Button>

                <PlanOfTheDay />

        </>
    );
}

export default TaskLogs