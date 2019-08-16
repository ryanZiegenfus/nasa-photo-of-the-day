import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: lightgrey;
  font-size: .75rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 35px;
`;

export function FooterMod() {
    return (
        <StyledDiv> Copyright 2019 </StyledDiv>
      )
    };