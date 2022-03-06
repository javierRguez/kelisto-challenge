/* eslint-disable react/prop-types */
import React from 'react'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import colors from 'styles/theme/colors'

const StyledIcon = styled.i`
  font-size: 20px;
`

const StyledButton = styled(Button)`
  min-width: 50px;
  min-height: 50px;
  border: 1px solid ${colors.textSecondaryMain};
`

const ButtonIcon = ({ selectedClassName, iconClass }) => {
  return (
    <StyledButton className={`${selectedClassName} button`} variant="outlined">
      <StyledIcon className={iconClass} />
    </StyledButton>
  )
}

export default ButtonIcon
