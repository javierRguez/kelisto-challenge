/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import IconButton from 'components/IconButton'
import { Tab, TabPanel, TabsList } from './styleIconTabs'

const IconTabs = () => {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>
          <IconButton
            selectedClassName="styled-button-selected"
            iconClass="k-icon-dashboard"
          />
        </Tab>
        <Tab>
          <IconButton
            selectedClassName="styled-button-selected"
            iconClass="k-icon-card"
          />
        </Tab>
        <Tab>
          <IconButton
            selectedClassName="styled-button-selected"
            iconClass="k-icon-refresh"
          />
        </Tab>
        <Tab>
          <IconButton
            selectedClassName="styled-button-selected"
            iconClass="k-icon-settings"
          />
        </Tab>
      </TabsList>
      <TabPanel value={0} />
      <TabPanel value={1} />
      <TabPanel value={2} />
      <TabPanel value={3} />
    </TabsUnstyled>
  )
}

export default IconTabs
