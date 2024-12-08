import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import { Box } from '@mui/system';




export default function CustomizedDialogs({ description, technologyStacks, project, code}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <VisibilityIcon sx={{ cursor: "pointer", color: "rgb(70, 70, 127)" }} />
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="xl"
        fullScreen
      >
        <DialogTitle sx={{ m: 0, p: 2 }} variant='h4' id="customized-dialog-title">
          {project? project : code}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant='h5' sx={{fontWeight: 'bold'}} gutterBottom>
          Description
          </Typography>
          <Typography gutterBottom component="div" variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography variant="h5">{technologyStacks && "TechnologyStacks: "}</Typography>
            <Grid container spacing={1} alignItems="center">
              {technologyStacks?.map((item, id) => (
                <Grid item key={id}>
                  <Chip label={item.name} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}