import React, { Component } from 'react'

export default class AppLoadingOverlay extends Component{

	render(){
		const { loading, children } = this.props
		return(
			<div style={{position:'relative'}}>
				{!loading?null:
					<div style={{position:'fixed',top:'0',left:'0',background:'rgba(0,0,0,0.3)',width:'100vw',height:'100vh',zIndex:'300'}}>
					 	<span style={{position:'absolute',margin:'auto',width:'100px',height:'100px',top:'0',left:'0',right:'0',bottom:'0'}}>
					 		<i className="fas fa-circle-notch fa-spin" style={{fontSize:'100px'}}></i>
					 	</span>
					</div>
				}
				{children}
			</div>
		)
	}
}