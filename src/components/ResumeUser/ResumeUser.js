import React from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import colors from 'styles/theme/colors'

const ResumeUserContainer = styled.div`
  padding-top: 15px;
`

const StyledLabel = styled(Typography)`
  color: ${(props) => (props.textColor ? props.textColor : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
`

const ResumeUser = () => {
  const { t } = useTranslation()
  return (
    <ResumeUserContainer>
      <StyledLabel
        textColor={colors.textPrimaryMain}
        align="center"
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        {t('HI_USER')}
      </StyledLabel>
      <StyledLabel
        marginTop="30px"
        textColor={colors.textSecondaryMain}
        align="center"
        variant="body2"
        gutterBottom
        component="div"
      >
        {t('YOUR_BALANCE')}
      </StyledLabel>
      <StyledLabel
        textColor={colors.textPrimaryMain}
        align="center"
        variant="h5"
        gutterBottom
        component="div"
        marginBottom="20px"
      >
        $ 83,415.60
      </StyledLabel>
    </ResumeUserContainer>
  )
}
export default ResumeUser
