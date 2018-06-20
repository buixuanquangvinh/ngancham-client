import "regenerator-runtime/runtime"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './router'
import store from './store'

import Printer from 'components/printer'

if(document.getElementById('app'))
	ReactDOM.render(
		<Provider store={store}>
			<AppRouter/>
		</Provider>,
		document.getElementById('app')
	)

if(document.getElementById('print'))
	ReactDOM.render(<Printer/>,document.getElementById('print'))