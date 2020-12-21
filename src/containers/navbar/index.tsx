import React, { useState } from "react";

import Navbar from "../../components/navbar";

import { INavbarContainerProps } from '../types'

const navbar: React.FC<INavbarContainerProps> = (props): JSX.Element => {
  const { isAuthenticated, firstName, onLogout } = props;

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (openStatus: boolean) => {
      setDrawerOpen(openStatus)
  }

  return (
    <>
      <Navbar 
        isAuthenticated={isAuthenticated}
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
        firstName={firstName}
        onLogout={onLogout}
      />
    </>
  );
};

export default navbar;
