import React, { Component } from 'react'

export default class AppModal extends Component{

	render(){
		const { id, height, label, children, full } = this.props
		let style = {}
		let modalStyle = {}
		if(height) style = { height:height }
		if(full) modalStyle = { minWidth: '100%', margin: '0px' }
		return(
			<div>
				<button className="btn btn-primary btn-block" data-toggle="modal" data-target={"#"+id} style={style}>{label}</button>
				<div className="modal fade" id={id} tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document" style={modalStyle}>
				    <div className="modal-content">
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