import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NoUserFound({ type, url }) {
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.1 } }}
    className="flex h-full flex-1 flex-col items-center justify-center"
  >
    <Typography color="text.secondary" variant="h5">
      {`There is no such ${type}`}
    </Typography>
    <Button className="mt-24" component={Link} variant="outlined" to={url} color="inherit">
      {`Go to ${type}s Page`}
    </Button>
  </motion.div>;
}
