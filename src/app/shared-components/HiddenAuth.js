import { Hidden } from '@mui/material';
import { selectUser } from 'app/store/userSlice';
import { useSelector } from 'react-redux';

export default function HiddenAuth({ authRoleType, children, hide, ...props }) {
  const user = useSelector(selectUser);
  const isDisplay = authRoleType.includes(user.role);
  const isHidden = hide && hide.condition && hide?.userType?.includes(user.role);
  return isDisplay && !isHidden ? <Hidden {...props}>{children}</Hidden> : null;
}
