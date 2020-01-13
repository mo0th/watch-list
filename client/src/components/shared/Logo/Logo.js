import React from "react"
import styled from "styled-components"

import logo from "#assets/logo.svg"

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
`

const Logo = () => <LogoImg src={logo} />

export default Logo
