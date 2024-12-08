import {showMessage} from 'app/store/fuse/messageSlice';
import {useDispatch} from 'react-redux';

export default function useSnackbarMessage() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showMessage({message}));
    };
}