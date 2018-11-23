import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const TitleBar = props => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton disableRipple color="inherit" aria-label="Home">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          ACME Reservation
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
