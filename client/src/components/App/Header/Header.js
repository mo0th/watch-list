import React from "react"
import styled from "styled-components"

import HeaderActions from "./HeaderActions"
import Logo from "#shared/Logo"

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  height: 3rem;
  width: 100%;
  max-width: 700px;
  padding: 0.5rem 1rem;
  display: grid;
  align-items: center;
  justify-content: space-between;
  justify-items: end;
  grid-template-columns: 24px 1fr 72px;
  gap: 8px;
  background: #1c1c1caa;
  z-index: 200;
  transform: translateX(-50%);
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderActions />
    </HeaderContainer>
  )
}

export default Header
