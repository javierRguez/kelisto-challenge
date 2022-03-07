import styled from 'styled-components'
import colors from 'styles/theme/colors'

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
  @media only screen and (min-width: 768px) {
    height: auto;
  }
`
const RecentListCoin = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
const FooterContainer = styled.div`
  padding-bottom: 15px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px 30px 0 0;
  background-color: ${colors.textPrimaryMain};
  height: inherit;
  @media only screen and (min-width: 768px) {
    height: auto;
    border-radius: 30px;
  }
`
const ListContainer = styled.div`
  padding-right: 5px;
  width: 100%;
  overflow: auto;
`
export {
  NotificationIconContainer,
  StyledIcon,
  HomeContainer,
  RecentListCoin,
  FooterContainer,
  ButtonContainer,
  Container,
  ListContainer,
}
