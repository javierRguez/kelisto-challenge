/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector } from 'react-redux'
import AllTransactionButton from 'components/AllTransactionButton'
import LanguajeSelector from 'components/LanguajeSelector'
import IconTabs from 'components/IconTabs'
import UserResume from 'components/UserResume'
import CoinResume from 'components/CoinResume'
import Label from 'components/Label'
import {
  NotificationIconContainer,
  StyledIcon,
  HomeContainer,
  RecentListCoin,
  FooterContainer,
  ButtonContainer,
  Container,
  ListContainer,
} from './styleHome'

const Home = () => {
  const coins = useSelector((state) => state.coins)
  const isLoading = coins && coins.length > 0

  return isLoading ? (
    <HomeContainer>
      <LanguajeSelector />
      <NotificationIconContainer>
        <StyledIcon className="k-icon-bell" />
      </NotificationIconContainer>
      <UserResume />
      <Container>
        <RecentListCoin>
          <Label
            value="RECENT"
            textColor="textSecondaryMain"
            align="left"
            variant="body1"
            gutterBottom
            component="div"
            width="100%"
            marginBottom="30px"
            isTranslation
          />
          <ListContainer>
            {coins.map((coin) => (
              <CoinResume key={coin.id} coinData={coin} />
            ))}
          </ListContainer>
        </RecentListCoin>

        <FooterContainer>
          <ButtonContainer>
            <AllTransactionButton />
          </ButtonContainer>
          <IconTabs />
        </FooterContainer>
      </Container>
    </HomeContainer>
  ) : (
    ''
  )
}

export default Home
