import React, { Component } from 'react'
import Popover from 'react-simple-popover'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default class AppDateRangePicker extends Component{

	constructor(props){
		super(props)
		this.state = {
			open:false,
		}
	}

	openPopover = ()=>{
		this.setState({open:true})
	}

	closePopover = ()=>{
		this.setState({open:false})
	}


	render(){
		const { label, start, end, onChangeStart, onChangeEnd } = this.props
		const { open } = this.state
		const { openPopover, closePopover } = this

		const liStyle={
			padding:'2px 10px',
			display:'block',
			marginBottom: '5px',
			width:'140px',
			textAlign:'left'
		}

		let startDate = moment(start,"DD/MM/YYYY")
		let endDate = moment(end,"DD/MM/YYYY")
		return(
			<div className='form-group'>
              	<div className='input-group'>
	                <span className='input-group-prepend'>
	                  	<span className="input-group-text">{label}</span>
	                </span>
	                <input className='form-control' ref="target" value={start+" - "+end} onClick={openPopover} readOnly/>
	                <Popover show={open} target={this.refs.target} onHide={closePopover} style={{width:'550px', height:'300px'}}>	                		
            			<div style={{display:'inline-block',marginRight:'10px',verticalAlign:'top'}}>
            				<DatePicker 
            					inline  
            					fixedHeight
            					selectStart
            					selected={startDate} 
            					startDate={startDate}
								endDate={endDate}
            					onChange={(e)=>onChangeStart(e.format("DD/MM/YYYY"))}
            				/>
            				<div style={{display:'inline-block',marginLeft:'10px'}}>
            					<DatePicker 
            						inline  
            						fixedHeight
            						selectsEnd
            						selected={endDate}
            						startDate={startDate}
									endDate={endDate} 
            						onChange={(e)=>onChangeEnd(e.format("DD/MM/YYYY"))}
            					/>
            				</div>
            			</div>
        			</Popover>
	            </div>
            </div>
		)
	}
}