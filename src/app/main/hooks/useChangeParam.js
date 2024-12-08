import { useNavigate, useLocation } from 'react-router-dom';

function useChangeParam() {
  const navigate = useNavigate();
  const location = useLocation();

  const changeParam = (paramValue) => {
    const path = location.pathname;
    const pathArray = path.split('/');
    pathArray[pathArray.length - 1] = paramValue;
    const newPath = pathArray.join('/');
    navigate(newPath);
  };

  return changeParam;
}

export default useChangeParam;
