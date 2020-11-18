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

import "../../index.css";

import { ISideDrawerProps } from "../types";

const DIRECTION = "left";

const sideDrawer: React.FC<ISideDrawerProps> = (props): JSX.Element => {
  const { toggleDrawer, isDrawerOpen, isAuthenticated, firstName } = props;

  const list1 = () => (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <span>Hello</span>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <span>Hello</span>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <span>Hello</span>
        </ListItem>
      </List>
      {isAuthenticated ? (
        <>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </>
      ) : null}
    </div>
  );

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
          <ListItem className="drawer-menu-item">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"PROFILE"}></ListItemText>
          </ListItem>

          <ListItem className="drawer-menu-item">
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary={"CHANGE PASSWORD"}></ListItemText>
          </ListItem>
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

  return (
    <div>
      <React.Fragment key={DIRECTION}>
        <Drawer
          anchor={DIRECTION}
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default sideDrawer;
