/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import colors from 'styles/theme/colors'

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
  margin: 6px 6px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors.primaryDark};
    .styled-button-selected {
      color: ${colors.textPrimaryMain};
    }
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${colors.primaryMain};
    .styled-button-selected {
      color: ${colors.textPrimaryMain};
    }
  }
`

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`
export { Tab, TabPanel, TabsList }
