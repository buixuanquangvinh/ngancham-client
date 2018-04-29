import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from 'components/app'
import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { LoginSelector } from 'features/login'
import { OrderSelector, OrderAction } from 'features/order'
import { RoomSelector } from 'features/room'
import { TableSelector } from 'features/table'

import { Login, Dashboard, CategoryManagement, ItemManagement, ItemDetail, OrderCreator, RoomManagement } from 'views'

import { AppLoadingOverlay } from 'components/common-ui'

class AppRouter extends Component{

	componentDidMount(){
		if(localStorage.token){
			this.props.bootstrap()
			this.connectSocket()
			window.location.href = '#/'
		}
		else
			window.location.href = '#/login'
	}

	connectSocket = ()=>{
	    const { socketUpdate } = this.props
	    let socket = new WebSocket("wss://ngancham.herokuapp.com/cable")

	    socket.onopen = function (event) {
	      	socket.send(JSON.stringify({"command":"subscribe","identifier":"{\"channel\":\"OrderChannel\"}"}))
	    }

	    socket.onmessage = function (event) {
	      	let data = JSON.parse(event.data)
	      	if(data.message && data.message.action_type){
	        	socketUpdate(data.message)
	      	}
	    }
	}

	render(){
		const { loading } = this.props
		return(
			<AppLoadingOverlay loading={loading}>
				<Router history={hashHistory}>
				    <Route path="/" component={App}>
				    	<IndexRoute component={Dashboard}/>
				    	<Route path="category" component={CategoryManagement}/>
				    	<Route path="item" component={ItemManagement}/>
				    	<Route path="item/:id" component={ItemDetail}/>
				    	<Route path="order-creator" component={OrderCreator}/>
				    	<Route path="room" component={RoomManagement}/>
				    </Route>
				    <Route path="login" component={Login}/>
			 	</Router>
		 	</AppLoadingOverlay>
		)
	}
}

const mapStateToProps = (state) => {
  	return {
  		loading:(CategorySelector.getLoading(state) || ItemSelector.getLoading(state) || LoginSelector.getLoading(state) || OrderSelector.getLoading(state) || RoomSelector.getLoading(state) || TableSelector.getLoading(state))
  	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	bootstrap: ()=> dispatch({type:'BOOTSTRAP'}),
  	socketUpdate: (data)=> dispatch({ type:OrderAction.SOCKET_UPDATE, payload:data }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter)