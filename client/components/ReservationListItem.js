import css from "./Reservations.css";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ReservationListItem = ({ item }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{item.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Hotel: {item.hotelName}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ReservationListItem;
