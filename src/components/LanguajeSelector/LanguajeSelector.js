/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import esIcon from 'assets/img/es.png'
import enIcon from 'assets/img/en.png'

const LanguajeContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  > * {
    margin-right: 5px;
  }
`

const LanguajeSelector = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <LanguajeContainer>
      <img src={esIcon} onClick={() => changeLanguage('es')} />
      <img src={enIcon} onClick={() => changeLanguage('en')} />
    </LanguajeContainer>
  )
}
export default LanguajeSelector
