import {useDispatch} from 'react-redux';
import useSnackbarMessage from './useSnackbarMessage';

export default function useDispatchSnackbar() {
    const dispatch = useDispatch();
    const setSnackbarMessage = useSnackbarMessage();

  return (action, message) => {
      return dispatch(action)
        .then((res) => {
          console.log('res res', res)
          console.log('res jjjj', res?.payload?.error?.message)
          let msg = '';
          if (res?.payload?.error?.message) {
            msg = message?.error || '';
            msg = msg !== '' ? `${msg} ${res?.payload?.error?.message}` : res?.payload?.error?.message;
          } else {
            msg = message?.success || '';
          }
          console.log('res hhhh', msg)
          if (msg !== '')
            setSnackbarMessage(msg)
          return res
        })
        .catch((err) => {
          console.log('--------------');
          console.log(err);
          let errorMsg = message?.error || '';
          errorMsg = errorMsg !== '' ? `${errorMsg} ${err.message}` : err.message;
          if (errorMsg)
            return setSnackbarMessage(errorMsg)
        });
    };
}
