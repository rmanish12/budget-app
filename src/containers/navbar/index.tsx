import React, { useState } from "react";

import Navbar from "../../components/navbar";

import { INavbarContainerProps } from '../types'

const navbar: React.FC<INavbarContainerProps> = (props): JSX.Element => {
  const { isAuthenticated, firstName } = props;

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (openStatus: boolean) => {
      console.log('status : ', openStatus)
      setDrawerOpen(openStatus)
  }

  return (
    <>
      <Navbar 
        isAuthenticated={isAuthenticated}
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
        firstName={firstName}
      />
    </>
  );
};

export default navbar;
