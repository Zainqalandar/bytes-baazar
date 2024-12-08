import { Paper, Typography } from '@mui/material';

export default function WidgetActionCard({ title, value, button, className }) {
  return (
    <Paper
      className={`flex flex-auto flex-col overflow-hidden rounded-2xl shadow ${className || ''}`}
    >
      <div className="mt-8 text-center">
        <Typography className="text-7xl font-bold leading-none tracking-tight sm:text-8xl">
          {title}
        </Typography>
        <Typography className="text-lg font-medium dark:text-blue-500">{value}</Typography>
        <div className="mt-20 mb-24 flex w-full items-baseline justify-center">
          {button || null}
        </div>
      </div>
    </Paper>
  );
}
