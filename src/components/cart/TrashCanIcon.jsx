import React from "react";
import styled from "styled-components";
import { ReactComponent as TrachCan } from "../../assets/trash.svg";

const TrashCanIcon = () => {
  return (
    <TrashIconContainer>
      <TrachCan className={"icon"} />
    </TrashIconContainer>
  );
};

const TrashIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  fill: #b1b1b1;
  .icon {
    width: 25px;
    height: 25px;
  }
  :hover path {
    fill: #ff0000;
  }
`;

export default TrashCanIcon;
