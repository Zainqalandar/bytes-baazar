import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Button } from '@mui/material';

export default function ArrowRightButton({ title, onClick = () => {}, className = '', ...props }) {
  return (
    <Button
      {...props}
      onClick={() => {}}
      color="primary"
      className={`min-w-128 bg-custom-purple px-16 text-white ${className}`}
      variant="contained"
      endIcon={<FuseSvgIcon size={20}>heroicons-solid:arrow-sm-right</FuseSvgIcon>}
    >
      {title}
    </Button>
  );
}
