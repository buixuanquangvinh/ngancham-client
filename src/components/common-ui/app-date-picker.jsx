import React, { Component } from 'react'
import Popover from 'react-simple-popover'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default class AppDatePicker extends Component{

	constructor(props){
		super(props)
		this.state = {
			open:false
		}
	}

	openPopover = ()=>this.setState({open:true})

	closePopover = ()=>this.setState({open:false})

	render(){
		const { label } = this.props
		const { open } = this.state
		const { openPopover, closePopover } = this

		return(
			<div className='form-group'>
              	<div className='input-group'>
	                <span className='input-group-addon'>
	                  	<span>{label}</span>
	                </span>
	                <input className='form-control' ref="target" onClick={openPopover}/>
	                <Popover show={open} target={this.refs.target} onHide={closePopover} style={{width:'270px', height:'260px'}}>
            			<DatePicker inline fixedHeight/>
        			</Popover>
	            </div>
            </div>
		)
	}
}