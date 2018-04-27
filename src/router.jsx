import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from 'components/app'
import { OrderAction } from 'features/order'
import { Login, Dashboard, CategoryManagement, ItemManagement, ItemDetail, OrderCreator, RoomManagement } from 'views'

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
	    let socket = new WebSocket("ws://localhost:3000/cable")

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
		return(
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
		)
	}
}

const mapStateToProps = (state) => {
  return {
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