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
			mode: 'Tùy chọn'
		}
	}

	openPopover = ()=>{
		this.setState({open:true})
	}

	closePopover = ()=>{
		this.setState({open:false})
	}

	setMode = (mode)=>{
		const { label, start, end, onChangeStart, onChangeEnd } = this.props
		this.setState({mode:mode})
		let startDate = moment(new Date()).startOf('day').format("HH:mm:ss DD/MM/YYYY")
		let endDate = moment(new Date()).endOf('day').format("HH:mm:ss DD/MM/YYYY")
		switch (mode) {
			case "Hôm nay":
				startDate = moment(new Date()).startOf('day').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).endOf('day').format("HH:mm:ss DD/MM/YYYY")
				break
			case "Hôm qua":
				startDate = moment(new Date()).subtract(1, "days").startOf('day').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(1, "days").endOf('day').format("HH:mm:ss DD/MM/YYYY")
				break
			case "7 ngày trước":
				startDate = moment(new Date()).subtract(7, "days").startOf('day').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).endOf('day').format("HH:mm:ss DD/MM/YYYY")
				break
			case "Tháng này":
				startDate = moment(new Date()).startOf('month').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).endOf('month').format("HH:mm:ss DD/MM/YYYY")
				break
			case "Tháng trước":
				startDate = moment(new Date()).subtract(1, "months").startOf('month').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(1, "months").endOf('month').format("HH:mm:ss DD/MM/YYYY")
				break
			case "2 tháng trước":
				startDate = moment(new Date()).subtract(2, "months").startOf('month').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(2, "months").endOf('month').format("HH:mm:ss DD/MM/YYYY")
				break
			case "6 tháng trước":
				startDate = moment(new Date()).subtract(6, "months").startOf('month').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(6, "months").endOf('month').format("HH:mm:ss DD/MM/YYYY")
				break
			case "1 năm trước":
				startDate = moment(new Date()).subtract(1, "years").startOf('year').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(1, "years").endOf('year').format("HH:mm:ss DD/MM/YYYY")
				break
			case "2 năm trước":
				startDate = moment(new Date()).subtract(2, "years").startOf('year').format("HH:mm:ss DD/MM/YYYY")
				endDate = moment(new Date()).subtract(2, "years").endOf('year').format("HH:mm:ss DD/MM/YYYY")
				break
		}
		onChangeStart(startDate)
		onChangeEnd(endDate)
	}


	render(){
		const { label, start, end, onChangeStart, onChangeEnd } = this.props
		const { open, mode } = this.state
		const { openPopover, closePopover, setMode } = this

		const liStyle={
			padding:'2px 10px',
			display:'block',
			marginBottom: '5px',
			width:'140px',
			textAlign:'left'
		}
		let startDate = moment(start,"HH:mm:ss DD/MM/YYYY")
		let endDate = moment(end,"HH:mm:ss DD/MM/YYYY")
		return(
			<div className='form-group'>
              	<div className='input-group'>
	                <span className='input-group-addon'>
	                  	<span>{label}</span>
	                </span>
	                <input className='form-control' ref="target" value={start+" - "+end} onClick={openPopover} readOnly/>
	                <Popover show={open} target={this.refs.target} onHide={closePopover} style={{width:mode=='Tùy chọn'?'625px':'170px', height:'350px'}}>
	                	<div>
	                		<div style={{display:'inline-block',marginRight:'10px',verticalAlign:'top'}}>
	            				<button className={mode=='None'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('None')}>None</button>
	            				<button className={mode=='Hôm nay'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('Hôm nay')}>Hôm nay</button>
	            				<button className={mode=='Hôm qua'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('Hôm qua')}>Hôm qua</button>
	            				<button className={mode=='7 ngày trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('7 ngày trước')}>7 ngày trước</button>
	            				<button className={mode=='Tháng này'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('Tháng này')}>Tháng này</button>
	            				<button className={mode=='Tháng trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('Tháng trước')}>Tháng trước</button>
	            				<button className={mode=='2 tháng trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('2 tháng trước')}>2 tháng trước</button>
	            				<button className={mode=='6 tháng trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('6 tháng trước')}>6 tháng trước</button>
	            				<button className={mode=='1 năm trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('1 năm trước')}>1 năm trước</button>
	            				<button className={mode=='2 năm trước'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('2 năm trước')}>2 năm trước</button>
	            				<button className={mode=='Tùy chọn'?"btn btn-primary":"btn btn-default"} style={liStyle} onClick={()=>setMode('Tùy chọn')}>Tùy chọn</button>
	                		</div>
	                		{mode!='Tùy chọn'?null:
	                			<div style={{display:'inline-block',marginRight:'10px',verticalAlign:'top'}}>
	                				<DatePicker 
	                					inline  
	                					fixedHeight
	                					selectStart
	                					selected={startDate} 
	                					startDate={startDate}
    									endDate={endDate}
	                					onChange={(e)=>onChangeStart(e.format("HH:mm:ss DD/MM/YYYY"))}
	                				/>
	                				<div style={{display:'inline-block',marginLeft:'10px'}}>
	                					<DatePicker 
	                						inline  
	                						fixedHeight
	                						selectsEnd
	                						selected={endDate}
	                						startDate={startDate}
    										endDate={endDate} 
	                						onChange={(e)=>onChangeEnd(e.format("HH:mm:ss DD/MM/YYYY"))}
	                					/>
	                				</div>
	                			</div>
	                		}
                		</div>
        			</Popover>
	            </div>
            </div>
		)
	}
}