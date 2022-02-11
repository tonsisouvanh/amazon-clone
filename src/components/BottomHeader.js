import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
const BottomHeader = () => {
  return (
    <>
      <BottomHeaderContainer>
        <NavMenu>
          <MenuIcon></MenuIcon>All
        </NavMenu>
        <NavMenu>Today's deal</NavMenu>
        <NavMenu>Customer Service</NavMenu>
        <NavMenu>Registry</NavMenu>
        <NavMenu>Gift Cards</NavMenu>
        <NavMenu>Sell</NavMenu>
      </BottomHeaderContainer>
    </>
  );
};

const BottomHeaderContainer = styled.div`
  /* min-width: 100wh; */
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  background-color: #232f3e;
`;
const NavMenu = styled.p`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: #ffffff;
  font-weight: 700;
`;

export default BottomHeader;
