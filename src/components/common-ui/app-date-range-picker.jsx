import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default class AppDateRangePicker extends Component{


	render(){
		const { label, start, end, onChangeStart, onChangeEnd } = this.props

		let startDate = moment(start,"DD/MM/YYYY")
		let endDate = moment(end,"DD/MM/YYYY")
		return(
			<div className='form-group'>
              	<div className='input-group'>
	                <span className='input-group-prepend'>
	                  	<span className="input-group-text">{label}</span>
	                </span>
	                <input className='form-control' value={start+" - "+end} data-toggle="modal" data-target="#datePicker" readOnly/>
					<div className="modal fade" id='datePicker' tabIndex="-1" role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-body">
									<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
										<DatePicker 
											inline  
											fixedHeight
											selectStart
											selected={startDate} 
											startDate={startDate}
											endDate={endDate}
											onChange={(e)=>onChangeStart(e.format("DD/MM/YYYY"))}
										/>
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
							</div>
						</div>
					</div>
	            </div>
            </div>
		)
	}
}