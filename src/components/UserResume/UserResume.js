import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Label from 'components/Label'
import { getFormatPrice } from 'utils/utils'

const UserResumeContainer = styled.div`
  padding-top: 15px;
`

const UserResume = () => {
  const userName = useSelector((state) => state.userInfo.name)
  const balance = useSelector((state) => state.userInfo.balance)
  const formatBalance = getFormatPrice(balance).replace('$', '$ ')
  const { t } = useTranslation()
  return (
    <UserResumeContainer>
      <Label
        value={`${t('HI_USER')} ${userName}`}
        textColor="textPrimaryMain"
        align="center"
        variant="subtitle1"
        gutterBottom
        component="div"
      />
      <Label
        value="YOUR_BALANCE"
        marginTop="30px"
        textColor="textSecondaryMain"
        align="center"
        variant="body2"
        gutterBottom
        component="div"
        isTranslation
      />
      <Label
        value={formatBalance}
        textColor="textPrimaryMain"
        align="center"
        variant="h5"
        gutterBottom
        component="div"
        marginBottom="20px"
      />
    </UserResumeContainer>
  )
}
export default UserResume
