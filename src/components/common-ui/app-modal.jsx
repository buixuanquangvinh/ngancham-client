import React, { Component } from 'react'

export default class AppModal extends Component{

	render(){
		const { id, label, children, style } = this.props
		return(
			<div>
				<button className="btn btn-primary btn-block" data-toggle="modal" data-target={"#"+id} style={style}>{label}</button>
				<div className="modal fade" id={id} tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document" style={{ minWidth: '100%', margin: '0px' }}>
				    <div className="modal-content" style={{ minHeight:'100vh' }}>
				    	<div className="modal-header">
			            <button className="close" data-dismiss="modal">×</button>
			            </div>
				      	<div className="modal-body">
				        	{children}
				      	</div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}