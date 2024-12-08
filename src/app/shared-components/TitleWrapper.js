import { Paper, Typography } from '@mui/material';

export default function TitleWrapper({ title, children, className = '' }) {
  return (
    <Paper
      className={`flex h-full flex-auto flex-col overflow-hidden rounded-2xl p-24 shadow ${className}`}
    >
      <div className="flex flex-col items-start justify-between sm:flex-row">
        <Typography className="truncate text-lg font-medium leading-6 tracking-tight">
          {title}
        </Typography>
      </div>
      {/* ScoreBoard */}
      {children}
    </Paper>
  );
}
