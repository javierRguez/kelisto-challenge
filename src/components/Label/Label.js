import React from 'react'
import Typography from '@mui/material/Typography'
import colors from 'styles/theme/colors'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const StyledLabel = styled(Typography)`
  color: ${(props) => (props.textColor ? props.textColor : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
  text-transform: none;
`

const Label = ({
  value,
  textColor,
  align,
  variant,
  gutterBottom,
  component,
  width,
  marginBottom,
  isTranslation,
  fontWeight,
}) => {
  const { t } = useTranslation()
  return (
    <StyledLabel
      textColor={colors[textColor]}
      align={align}
      variant={variant}
      gutterBottom={gutterBottom}
      component={component}
      width={width}
      marginBottom={marginBottom}
      fontWeight={fontWeight}
    >
      {isTranslation ? t(value) : value}
    </StyledLabel>
  )
}

Label.defaultProps = {
  isTranslation: false,
  textColor: undefined,
  align: undefined,
  variant: undefined,
  gutterBottom: false,
  component: undefined,
  width: undefined,
  marginBottom: undefined,
  fontWeight: undefined,
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  isTranslation: PropTypes.bool,
  textColor: PropTypes.string,
  align: PropTypes.string,
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool,
  component: PropTypes.string,
  width: PropTypes.string,
  marginBottom: PropTypes.string,
  fontWeight: PropTypes.string,
}

export default Label
