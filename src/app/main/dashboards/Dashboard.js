import {selectUser} from 'app/store/userSlice';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const { role } = useSelector(selectUser);
    const userRole = role == 'super-admin' ? 'admin' : role;
    // Api Call hook here
    return <Navigate to={`/dashboard/${userRole}`}/>;
}
