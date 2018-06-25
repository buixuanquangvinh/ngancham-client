import React, { Component } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from 'components/app'
import { OrderAction } from 'features/order'

import { Login, Dashboard,
 	CategoryManagement, ItemManagement,
 	ItemDetail, OrderCreator, Report, 
 	RoomDetail, RoomManagement, UserManagement,
 	KitchenManagement, MyProfile , MaterialManagement
} from 'views'

import { isRole } from 'ulti'

class AppRouter extends Component{

	componentDidMount(){
		console.log('component did mount')
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
		return(
			<Router history={hashHistory}>
				{(localStorage.token && localStorage.user)?
			    <Route path="/" component={App}>
			    	<IndexRoute component={Dashboard}/>
			    	{isRole('admin')?<Route path="category" component={CategoryManagement}/>:null}
			    	{isRole('admin')?<Route path="material" component={MaterialManagement}/>:null}
			    	{isRole('admin')?<Route path="item" component={ItemManagement}/>:null}
			    	{isRole('admin')?<Route path="item/:id" component={ItemDetail}/>:null}
			    	{isRole('admin','manager')?<Route path="order-creator" component={OrderCreator}/>:null}
			    	{isRole('admin')?<Route path="report" component={Report}/>:null}
			    	{isRole('admin','manager')?<Route path="kitchen" component={KitchenManagement}/>:null}
			    	{isRole('admin','manager')?<Route path="room" component={RoomManagement}/>:null}
			    	{isRole('admin','manager')?<Route path="room/:id" component={RoomDetail}/>:null}
			    	{isRole('admin')?<Route path="user" component={UserManagement}/>:null}
			    	<Route path="my-profile" component={MyProfile}/>
			    </Route>:
			    <Route path="login" component={Login}/>
				}
		 	</Router>
		)
	}
}

const mapStateToProps = (state) => {
  	return {}
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