import React from 'react'
import Menu from '../src/menu'
import { setOptions } from '@storybook/addon-options'
import { storiesOf } from '@storybook/react'

setOptions({
  name: 'VDO',
  url: 'https://vote.org',
  showAddonPanel: false
})

storiesOf('VDO Menu', module)
  .add('Default', () => (
    <div className="vdo-menu">
      <Menu />
      <Menu.Styles />
    </div>
  ))
  .add('Election Day', () => (
    <div className="vdo-menu">
      <Menu order={['polls', 'ballot']} hide={['register']} />
      <Menu.Styles />
    </div>
  ))
