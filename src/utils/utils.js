/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const getFormatVariantPrice = (value) => {
  return `${value >= 0 ? '+' : ''}${value}%`
}

const getFormatPrice = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(value)
}

const getVariantTextColor = (value) => {
  return value >= 0 ? 'positivePriceMain' : 'negativePriceMain'
}

const getCoinImg = (value) => {
  let img = ''
  try {
    img = require(`assets/img/${value.toLowerCase()}.png`)
    return img
  } catch (error) {
    return img
  }
}

export {
  getFormatPrice,
  getFormatVariantPrice,
  getVariantTextColor,
  getCoinImg,
}
