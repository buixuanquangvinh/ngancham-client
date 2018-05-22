import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from 'components/app'
import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { LoginSelector } from 'features/login'
import { OrderSelector, OrderAction } from 'features/order'
import { ReportSelector } from 'features/report'
import { RoomSelector } from 'features/room'

import { Login, Dashboard, CategoryManagement, ItemManagement, ItemDetail, OrderCreator, Report, RoomDetail, RoomManagement, UserManagement, KitchenManagement } from 'views'

import { AppLoadingOverlay } from 'components/common-ui'
import { isRole } from 'ulti'

class AppRouter extends Component{

	componentDidMount(){
		if(localStorage.token && localStorage.user){
			this.props.bootstrap()
			this.connectSocket()
			window.location.href = '#/'
		}
		else
			window.location.href = '#/login'
	}

	connectSocket = ()=>{
	    const { synchronize, socketUpdate } = this.props
		const { connectSocket } = this
	    let socket = new WebSocket("wss://ngancham.herokuapp.com/cable")
	    //let socket = new WebSocket("ws://localhost:3000/cable")

	    socket.onopen = function (event) {
	      	socket.send(JSON.stringify({"command":"subscribe","identifier":"{\"channel\":\"OrderChannel\"}"}))
	      	setTimeout(()=>{synchronize()},2000)
	    }
		
		socket.onclose = function(event) {
			connectSocket()
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
					{(localStorage.token && localStorage.user)?
				    <Route path="/" component={App}>
				    	<IndexRoute component={Dashboard}/>
				    	{isRole('admin')?<Route path="category" component={CategoryManagement}/>:null}
				    	{isRole('admin')?<Route path="item" component={ItemManagement}/>:null}
				    	{isRole('admin')?<Route path="item/:id" component={ItemDetail}/>:null}
				    	{isRole('admin','manager')?<Route path="order-creator" component={OrderCreator}/>:null}
				    	{isRole('admin')?<Route path="report" component={Report}/>:null}
				    	{isRole('admin','manager')?<Route path="kitchen" component={KitchenManagement}/>:null}
				    	{isRole('admin','manager')?<Route path="room" component={RoomManagement}/>:null}
				    	{isRole('admin','manager')?<Route path="room/:id" component={RoomDetail}/>:null}
				    	{isRole('admin')?<Route path="user" component={UserManagement}/>:null}
				    </Route>:
				    <Route path="login" component={Login}/>
					}
			 	</Router>
		 	</AppLoadingOverlay>
		)
	}
}

const mapStateToProps = (state) => {
  	return {
  		loading:(CategorySelector.getLoading(state) || ItemSelector.getLoading(state) || LoginSelector.getLoading(state) || OrderSelector.getLoading(state) || ReportSelector.getLoading(state) || RoomSelector.getLoading(state) )
  	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	bootstrap: ()=> dispatch({type:'BOOTSTRAP'}),
  	synchronize: (data)=> dispatch({ type:OrderAction.SYNCHRONIZE }),
  	socketUpdate: (data)=> dispatch({ type:OrderAction.SOCKET_UPDATE, payload:data })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter)