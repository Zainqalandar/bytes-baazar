import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

function UsersDashboardHeader({ buttons }) {
  const user = useSelector(selectUser);
  return (
    <div className="flex w-full flex-col px-24 lg:px-0">
      <div className="my-32 flex min-w-0 flex-auto flex-col sm:my-48 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-auto items-center">
          <Avatar className="flex-0 h-64 w-64" alt="user photo" src={user.photo}>
            {user.name}
          </Avatar>
          <div className="mx-16 flex min-w-0 flex-col">
            <Typography className="truncate text-2xl font-semibold leading-7 tracking-tight md:text-5xl md:leading-snug">
              {`Welcome back, ${user.name}!`}
            </Typography>

            <div className="flex items-center">
              <FuseSvgIcon size={20} color="action">
                heroicons-solid:bell
              </FuseSvgIcon>
              <Typography className="mx-6 truncate leading-6" color="text.secondary">
                You have 2 new messages and 15 new tasks
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-24 flex items-center space-x-12 sm:mx-8 sm:mt-0">{buttons}</div>
      </div>
    </div>
  );
}

export default UsersDashboardHeader;
