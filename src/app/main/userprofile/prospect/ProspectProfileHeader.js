import { Avatar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ProspectProfileHeader = ({ user }) => {
  return (
    <div className="flex flex-col">
      <img
        className="h-160 w-full object-cover lg:h-320"
        // tempComment: Remove when picture is available
        src={
          user.photo ||
          'https://img.freepik.com/premium-photo/bright-abstract-background-with-shining-purple-waves-dark_476363-6207.jpg'
        }
        alt="Profile Cover"
      />

      <div className="flex-0 mx-auto flex w-full flex-col items-center px-32 pb-4 lg:h-72 lg:flex-row">
        <div className="-mt-96 rounded-full lg:-mt-88">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <Avatar
              sx={{ borderColor: 'background.paper' }}
              className="h-128 w-128 border-4"
              src={user.photo}
              alt="User avatar"
            />
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center lg:mt-0 lg:ml-32 lg:items-start">
          <Typography className="text-lg font-bold leading-none">{user.name}</Typography>
          {/* tempComment: Change when real data is available */}
          <Typography color="text.secondary">{user.address || 'London'}</Typography>
        </div>

        <div className="mx-32 hidden h-32 border-l-2 lg:flex" />

        <div className="grow-4 my-16 flex w-full flex-1 flex-wrap justify-around lg:my-0">
          <div className="mt-24 flex items-center space-x-24 lg:mt-0">
            <div className="flex flex-col items-center">
              <Typography className="font-bold">{user.email}</Typography>
              <Typography className="text-sm font-medium" color="text.secondary">
                {user.phone}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProspectProfileHeader;
