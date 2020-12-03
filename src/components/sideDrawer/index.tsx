import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import { Link } from "react-router-dom";

import "../../index.css";

import { ISideDrawerProps } from "../types";

const DIRECTION = "left";

const sideDrawer: React.FC<ISideDrawerProps> = (props): JSX.Element => {
  const { toggleDrawer, isDrawerOpen, isAuthenticated, firstName } = props;
  const list = () => (
    <>
      <div role="presentation" className="background">
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`HELLO ${firstName}`}></ListItemText>
          </ListItem>
        </List>
      </div>
      <Divider />
      <div role="presentation" className="drawer-menu">
        <List>
          <Link to="/profile">
            <ListItem className="drawer-menu-item">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"PROFILE"}></ListItemText>
            </ListItem>
          </Link>

          <Link to="/changePassword">
            <ListItem className="drawer-menu-item">
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary={"CHANGE PASSWORD"}></ListItemText>
            </ListItem>
          </Link>

          <ListItem className="drawer-menu-item">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"LOGOUT"}></ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );

  const ifNotAuthenticated = () => (
    <>
         <div role="presentation" className="drawer-menu">
        <List>

          {/* <Link to="/changePassword"> */}
            <ListItem className="drawer-menu-item">
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary={"LOGIN"}></ListItemText>
            </ListItem>
          {/* </Link> */}

          <ListItem className="drawer-menu-item">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"REGISTER"}></ListItemText>
          </ListItem>
        </List>

      </div>
    </>
  )

  return (
    <div>
      <React.Fragment key={DIRECTION}>
        <Drawer
          anchor={DIRECTION}
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          {isAuthenticated ? list() : ifNotAuthenticated()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default sideDrawer;
