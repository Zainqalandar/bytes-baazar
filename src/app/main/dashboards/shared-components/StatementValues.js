import { Typography } from '@mui/material';

export default function StatementValues({ title, value }) {
  return (
    <div className="mx-24 my-12 flex flex-col">
      <Typography color="text.secondary" className="text-sm font-medium leading-none">
        {title}
      </Typography>
      <Typography className="mt-8 text-3xl font-medium leading-none">
        {value?.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Typography>
    </div>
  );
}
