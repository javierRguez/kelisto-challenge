/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import getCoins from 'store/actions/coinActions'
import AllTransactionButton from 'components/AllTransactionButton'
import LanguajeSelector from 'components/LanguajeSelector'
import IconTabs from 'components/IconTabs/IconTabs'
import ResumeUser from 'components/ResumeUser'
import colors from 'styles/theme/colors'

const StyledLabel = styled(Typography)`
  color: ${(props) => (props.textColor ? props.textColor : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
`

const NotificationIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`

const StyledIcon = styled.i`
  font-size: 20px;
  color: ${colors.textPrimaryMain};
`

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`
const RecentListIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 15px;
  width: 100%;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const Container = styled.div`
  border-radius: 30px 30px 0 0;
  background-color: ${colors.textPrimaryMain};
  height: inherit;
`

const Home = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const coins = useSelector((state) => state.coins)

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  return (
    <HomeContainer>
      <LanguajeSelector />
      <NotificationIconContainer>
        <StyledIcon className="k-icon-bell" />
      </NotificationIconContainer>
      <ResumeUser />
      <Container>
        <RecentListIcon>
          <StyledLabel
            textColor={colors.textSecondaryMain}
            align="left"
            variant="body1"
            gutterBottom
            component="div"
            width="100%"
          >
            {t('RECENT')}
          </StyledLabel>
          {coins.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </RecentListIcon>

        <FooterContainer>
          <ButtonContainer>
            <AllTransactionButton />
          </ButtonContainer>
          <IconTabs />
        </FooterContainer>
      </Container>
    </HomeContainer>
  )
}

export default Home
