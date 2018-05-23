import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { ReportAction, ReportSelector } from 'features/report'
import { UserSelector } from 'features/user'

import { AppCurrency, AppSelect, AppDateRangePicker } from 'components/common-ui'
import { ArchivedOrder } from 'components/report'

class Report extends Component {

	constructor(props){
    	super(props)
    	this.state = {
    		start_date:moment().format("DD/MM/YYYY"),
    		end_date:moment().format("DD/MM/YYYY"),
      		create_user:'',
      		checkout_user:''
    	}
  	}
  
	editFilter = (key,value)=>{
	    this.setState({[key]:value})
	}

	filterArchivedOrder = (archivedOrder)=>{
	    const { create_user, checkout_user } = this.state
	    let check_create_user = true
	    let check_checkout_user = true
	    if(create_user)
	      check_create_user = (archivedOrder.create_user == create_user)
	    if(checkout_user)
	      check_checkout_user = ( archivedOrder.checkout_user == checkout_user )
	    return check_create_user && check_checkout_user
	}

	calSum = ()=>{
	    const { filterArchivedOrder } = this
	    const { archivedOrderList } = this.props
	    let sum = 0
	    archivedOrderList.filter(filterArchivedOrder).map((archivedOrder)=>{
	      sum+=archivedOrder.total_amount
	    })
	    return sum
	}

	render(){
		const { start_date, end_date, create_user, checkout_user } = this.state
		const { userOptions, archivedOrderList, archivedOrderedItemList, fetchData } = this.props
		const { editFilter, filterArchivedOrder, calSum } = this 
	  	return (
	      	<div className="row">
	        	<div className='col-12 col-md-6'>
	      			<AppDateRangePicker label="time" start={start_date} onChangeStart={(value)=>editFilter('start_date',value)} end={end_date} onChangeEnd={(value)=>editFilter('end_date',value)}/>
	    		</div>
	        	<div className='col-12 col-md-6'>
		          	<AppSelect label='Tạo bởi' value={create_user} onChange={(e)=>editFilter('create_user',e.target.value)} options={userOptions}/>
		        </div>
		        <div className='col-12 col-md-6'>
		          	<AppSelect label='Thanh toán bởi' value={checkout_user} onChange={(e)=>editFilter('checkout_user',e.target.value)} options={userOptions}/>
		        </div>
		        <div className='col-12 col-md-6'>
	      			<button className='btn btn-primary btn-block' onClick={()=>fetchData(this.state)}>Xem dữ liệu</button>
	    		</div>
		        <div className='col-12 mt-3'>
		        	<p>Tổng: <AppCurrency>{calSum()}</AppCurrency></p>
		          	{archivedOrderList.filter(filterArchivedOrder).map((archivedOrder)=>{
		          		let archivedOrderedItems =archivedOrderedItemList.filter((i)=>i.archived_order_id==archivedOrder.id)
		            	return <ArchivedOrder key={archivedOrder.id} archivedOrder={archivedOrder} archivedOrderedItems={archivedOrderedItems}/>
		          	})}
		        </div>
	      	</div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
    userOptions: [{ value:'', label:'Tất cả' }].concat(UserSelector.getUserList(state).map((user)=>{ return { value:user.user_name, label:user.user_name } })),
    archivedOrderList: ReportSelector.getArchivedOrderList(state),
    archivedOrderedItemList: ReportSelector.getArchivedOrderedItemList(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (filter) => dispatch({ type:ReportAction.FETCH_DATA, payload: filter })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report)