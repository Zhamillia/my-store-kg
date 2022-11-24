import React from "react";
import "../styles/homePage.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2 className="h2">About our website</h2>
      <p className="p3">
        Online clothing and electronics store with affordable prices and
        worldwide shipping! Visit the site and shop today!
      </p>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.dark" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://www.london-fire.gov.uk/media/4613/london-fire-brigade-tim-powel-director-of-people.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.light">
                  Ali Connors
                </Typography>
                {
                  "-  A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.ligth">
                  Jennifer
                </Typography>
                {
                  "- Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1Hth9p6gt_1cCMVbbvHn9yh8RRRyDdrVMJBspwV-jKnB5BwkRWz3h4Sb_2BY8Gc0emM&usqp=CAU"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.ligth">
                  Sandra Adams
                </Typography>
                {"- Great customer service and professional staff members."}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default HomePage;
