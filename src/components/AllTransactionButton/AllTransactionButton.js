import React from 'react'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import Label from 'components/Label'

const StyledButton = styled(Button)`
  width: 90%;
  padding: 15px 0;
`

const AllTransactionButton = () => {
  return (
    <StyledButton
      className="rounded-button"
      variant="contained"
      disableElevation
      color="primary"
    >
      <Label
        value="ALL_TRANSACTION_BUTTON"
        textColor="textPrimaryMain"
        align="center"
        variant="subtitle1"
        isTranslation
      />
    </StyledButton>
  )
}

export default AllTransactionButton
