import { useState } from 'react'

const useTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const getselectedTab = () => {
    return selectedTab
  }

  const changeSelectedTab = (value) => {
    setSelectedTab(value)
  }
  return { getselectedTab, changeSelectedTab }
}
export default useTabs
