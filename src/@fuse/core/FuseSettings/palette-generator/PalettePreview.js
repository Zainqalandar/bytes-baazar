import clsx from 'clsx';
import { Box } from '@mui/system';

function PalettePreview(props) {
  const { palette, className } = props;

  return (
    <Box
      className={clsx(
        'relative w-200 overflow-hidden rounded-6 text-left font-bold shadow',
        className
      )}
      sx={{
        backgroundColor: palette.background.default,
        color: palette.text.primary,
      }}
      type="button"
    >
      <Box
        className="relative h-56 w-full px-8 pt-8"
        sx={{
          backgroundColor: palette.primary.main,
          color: (theme) =>
            palette.primary.contrastText || theme.palette.getContrastText(palette.primary.main),
        }}
      >
        <span className="text-12">Header (Primary)</span>

        <Box
          className="absolute bottom-0 right-0 -mb-10 mr-4 flex h-20 w-20 items-center justify-center rounded-full text-10 shadow"
          sx={{
            backgroundColor: palette.secondary.main,
            color: (theme) =>
              palette.secondary.contrastText ||
              theme.palette.getContrastText(palette.secondary.main),
          }}
        >
          <span>S</span>
        </Box>
      </Box>
      <div className="-mt-24 w-full pl-8 pr-28">
        <Box
          className="relative h-96 w-full rounded-4 p-8 shadow"
          sx={{
            backgroundColor: palette.background.paper,
            color: palette.text.primary,
          }}
        >
          <span className="text-12 opacity-75">Paper</span>
        </Box>
      </div>

      <div className="w-full px-8 py-8">
        <span className="text-12 opacity-75">Background</span>
      </div>

      {/* <pre className="language-js p-24 w-400">{JSON.stringify(palette, null, 2)}</pre> */}
    </Box>
  );
}

export default PalettePreview;
