import React from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import colors from 'styles/theme/colors'

const StyledButton = styled(Button)`
  width: 90%;
  padding: 15px 0;
`

const StyledLabel = styled(Typography)`
  color: ${(props) => (props.textColor ? props.textColor : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  text-transform: none;
`

const AllTransactionButton = () => {
  const { t } = useTranslation()
  return (
    <StyledButton
      className="button"
      variant="contained"
      disableElevation
      color="primary"
    >
      <StyledLabel
        textColor={colors.textPrimaryMain}
        align="center"
        variant="subtitle1"
      >
        {t('ALL_TRANSACTION_BUTTON')}
      </StyledLabel>
    </StyledButton>
  )
}

export default AllTransactionButton
