import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from 'styles/theme/colors'

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  background-color: ${colors.textPrimaryMain};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`

const NotFound = () => (
  <Container>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </Container>
)

export default NotFound
