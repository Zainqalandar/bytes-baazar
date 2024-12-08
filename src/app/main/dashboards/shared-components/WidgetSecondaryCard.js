import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';

export default function WidgetSecondaryCard({ title, value }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: (_theme) =>
          _theme.palette.mode === 'light'
            ? lighten(theme.palette.background.default, 0.4)
            : lighten(theme.palette.background.default, 0.02),
      }}
      className="col-span-2 flex flex-col items-center justify-center rounded-2xl py-32 px-4 sm:col-span-1"
    >
      <Typography className="text-5xl font-semibold leading-none tracking-tight">
        {title}
      </Typography>
      <Typography className="mt-4 text-center text-sm font-medium">{value}</Typography>
    </Box>
  );
}
