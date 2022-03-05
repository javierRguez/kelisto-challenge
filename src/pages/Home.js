/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import getCoins from 'store/actions/coinActions'
import AllTransactionButton from 'components/AllTransactionButton'
import ButtonIcon from 'components/ButtonIcon'

const Home = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const coins = useSelector((state) => state.coins)

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => changeLanguage('es')}>es</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('LEARN_REACT')}
      </a>
      {coins.map((coin) => (
        <p key={coin.id}>{coin.name}</p>
      ))}
      <AllTransactionButton />
      <ButtonIcon />
    </div>
  )
}

export default Home
