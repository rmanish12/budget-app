import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../../index.css";

import SideDrawer from "../sideDrawer";

import { INavbarComponentProps } from '../types'

const navbar: React.FC<INavbarComponentProps> = (props): JSX.Element => {
  const { isAuthenticated, toggleDrawer, isDrawerOpen, firstName } = props;

  return (
    <>
      <AppBar position="static" className="background">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            isAuthenticated={isAuthenticated}
            toggleDrawer={toggleDrawer}
            isDrawerOpen={isDrawerOpen}
            firstName={firstName}
          />

          <Typography variant="h6" className="flex-1 all-caps">
            Budget App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default navbar;
