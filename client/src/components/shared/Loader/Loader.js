import React from "react"
import { MdCamera } from "react-icons/md"
import styled from "styled-components"

import { SPINNER_SIZE } from "#root/constants"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  transform: scaleX(-1);
`

const Spinner = styled.div`
  width: ${SPINNER_SIZE};
  height: ${SPINNER_SIZE};
  animation: spin 1.5s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`

const Loader = () => {
  return (
    <Wrapper>
      <Spinner>
        <MdCamera size={SPINNER_SIZE} />
      </Spinner>
    </Wrapper>
  )
}

export default Loader
