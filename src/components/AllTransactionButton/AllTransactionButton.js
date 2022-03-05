import * as React from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

const AllTransactionButton = () => {
  const { t } = useTranslation()
  return (
    <Button variant="contained" disableElevation color="primary">
      {t('ALL_TRANSACTION_BUTTON')}
    </Button>
  )
}

export default AllTransactionButton
