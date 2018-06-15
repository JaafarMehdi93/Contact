import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'babel-polyfill'
import intl from 'intl'
import 'intl/locale-data/jsonp/fr.js'

import registerServiceWorker from './registerServiceWorker'

import store from './store'

import App from './components/app/App'

import './__styles__/index.css'

if (!global.Intl) {
	global.Intl = intl
}

console.log(`${process.env.REACT_APP_NAME}:${process.env.REACT_APP_VERSION}`)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
