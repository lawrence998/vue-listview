/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import { withNotes } from '@storybook/addon-notes'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import _ from 'lodash'
import { version } from '../package.json'
import 'normalize.css'
import Listview from '@/'

Vue.use(Listview)

const viewports = _.pick(INITIAL_VIEWPORTS, [
  'responsive',
  'ipad',
  'ipad10p',
  'ipad12p'
])
configureViewport({
  viewports
})

setOptions({
  name: `PPS Vue Listview v${version}`,
  url: 'http://192.168.1.122:3000/pps-fe/bg-pps-vue-listview',
  addonPanelInRight: false
})
addDecorator(withNotes)

const req = require.context('../stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
