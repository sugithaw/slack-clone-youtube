import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
//import AccessTimeIcon from "@material-ui/icons/AccessTime";
//import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <HeaderContainer>
      {/*Header Left*/}
      <HeaderLeft>
        <MenuIcon />
        <h1>E-LPT</h1>
      </HeaderLeft>

      {/*Header Search*/}
      <HeaderSearch>
        <input placeholder="Cari data toko disini" />
      </HeaderSearch>

      {/*Header Right*/}
      <HeaderRight>
        <HelpOutlineIcon />
        <HeaderAvatar
        // TODO: Add onclick
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fix;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  //margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: 10px;
  }

  > h1 {
    margin-left: 20px;
    margin-right: auto;
  }
`;
const HeaderAvatar = styled(Avatar)`
  margin-right: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #fcfcfc;
  text-align: center;
  display: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
