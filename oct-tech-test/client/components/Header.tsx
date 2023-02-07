import React from "react";
import Link from "next/link";

import {
  StyledHeader,
  StyledHeaderLogoImg,
  StyledHeaderContainerDiv,
} from "../styles/Header.styles";
import Basket from "./Basket";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainerDiv>
        <Basket />
      </StyledHeaderContainerDiv>
    </StyledHeader>
  );
}
