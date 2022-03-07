import styled from 'styled-components'

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CoinResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
`

const CoinDescriptioContainer = styled.div`
  display: flex;
  align-items: center;
`

const CoinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export {
  PriceContainer,
  CoinResumeContainer,
  CoinDescriptioContainer,
  CoinNameContainer,
}
