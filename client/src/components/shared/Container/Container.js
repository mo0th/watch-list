import styled from "styled-components"

const Container = styled.div`
  width: calc(100% - 1rem);
  margin: 0 0.5rem;
  max-width: 700px;

  @media screen and (min-width: 425px) {
    margin: 0 auto;
  }
`

export default Container
