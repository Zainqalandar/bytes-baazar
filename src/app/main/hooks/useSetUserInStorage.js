import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { registrationsUsers } from 'src/app/auth/authRoles';
import JwtService from 'src/app/auth/services/jwtService';

const useSetUserInStorage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = new URLSearchParams(location.search).get('user');
    if (user && registrationsUsers.includes(user)) {
      JwtService.setUserInStorage(user);
    }
  }, []);
};
export default useSetUserInStorage;
