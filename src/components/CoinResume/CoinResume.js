/* eslint-disable react/prop-types */
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Label from 'components/Label'
import {
  getFormatVariantPrice,
  getFormatPrice,
  getVariantTextColor,
  getCoinImg,
} from 'utils/utils'
import {
  PriceContainer,
  CoinResumeContainer,
  CoinDescriptioContainer,
  CoinNameContainer,
} from './styleCoinResume'

const CoinResume = ({ coinData }) => {
  return (
    <CoinResumeContainer>
      <CoinDescriptioContainer>
        <Avatar alt="Remy Sharp" src={getCoinImg(coinData.sku)} />
        <CoinNameContainer>
          <Label variant="h6" value={coinData.name} />
          <Label
            variant="subtitle1"
            textColor="textSecondaryMain"
            value={coinData.sku}
          />
        </CoinNameContainer>
      </CoinDescriptioContainer>
      <PriceContainer>
        <Label
          fontWeight="500"
          variant="body1"
          align="right"
          value={getFormatPrice(coinData.stock)}
        />
        <Label
          variant="body1"
          align="right"
          textColor={getVariantTextColor(coinData.variant)}
          value={getFormatVariantPrice(coinData.variant)}
        />
      </PriceContainer>
    </CoinResumeContainer>
  )
}
export default CoinResume
