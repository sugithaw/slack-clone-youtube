import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title }) {
  return (
    <SidebarContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarContainer>
  );
}

export default SidebarOption;

const SidebarContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover{
      opacity:0.9;
      background-color:#bd3a44;
  }
`;
const SidebarOptionChannel = styled.div``;
