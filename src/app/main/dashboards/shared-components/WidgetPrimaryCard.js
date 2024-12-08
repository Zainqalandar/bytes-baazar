import { Typography } from '@mui/material';

export default function WidgetPrimaryCard({ title, value, className }) {
  // values for colors are red,blue,amber,green
  return (
    <div
      className={`col-span-2 flex flex-col items-center justify-center rounded-2xl bg-indigo-50 py-32 px-4 text-indigo-800 ${
        className || ''
      }`}
    >
      <Typography className="text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
        {title}
      </Typography>
      <Typography className="mt-4 text-sm font-medium sm:text-lg">{value}</Typography>
    </div>
  );
}
