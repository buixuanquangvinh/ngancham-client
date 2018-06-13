import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { ReportAction, ReportSelector } from 'features/report'
import { UserSelector } from 'features/user'

import { AppCurrency, AppSelect, AppDateRangePicker } from 'components/common-ui'
import ArchivedOrderReport from './archived-order-report'
import Chart from './chart'

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
  	
  	componentDidMount(){
  		this.props.fetchData(this.state)
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

	calData = ()=>{
	    const { filterArchivedOrder } = this
	    const { archivedOrderList } = this.props
	    let sum = 0
	    let abnormal = 0
	    archivedOrderList.filter(filterArchivedOrder).map((archivedOrder)=>{
	    	archivedOrder.status=='abnormal'?abnormal+=1:null
	        sum+=archivedOrder.total_amount
	    })
	    return { sum:sum, abnormal:abnormal }
	}

	render(){
		const { start_date, end_date, create_user, checkout_user } = this.state
		const { userOptions, archivedOrderList, archivedOrderedItemList, itemList, categoryList, fetchData } = this.props
		const { editFilter, filterArchivedOrder, calData } = this 
		const data = calData()
	  	return (
	      	<div className="row">
	        	<div className='col-12 col-md-6 mt-2'>
	      			<AppDateRangePicker label="time" start={start_date} onChangeStart={(value)=>editFilter('start_date',value)} end={end_date} onChangeEnd={(value)=>editFilter('end_date',value)}/>
	    		</div>
	        	<div className='col-12 col-md-6 mt-2'>
		          	<AppSelect label='Tạo bởi' value={create_user} onChange={(e)=>editFilter('create_user',e.target.value)} options={userOptions}/>
		        </div>
		        <div className='col-12 col-md-6 mt-2'>
		          	<AppSelect label='Thanh toán bởi' value={checkout_user} onChange={(e)=>editFilter('checkout_user',e.target.value)} options={userOptions}/>
		        </div>
		        <div className='col-12 col-md-6 mt-2'>
	      			<button className='btn btn-primary btn-block' onClick={()=>fetchData(this.state)}>Xem dữ liệu</button>
	    		</div>
	    		<div className='col-12 mt-2'>
	    			<div className='card'>
	      				<div className='card-body'>
	      					<div>Tổng thu: <span className='text-success'><AppCurrency>{data.sum}</AppCurrency></span> vnđ</div>
	      					<div>Số lượng hóa đơn có vấn đề: <span className='text-danger'>{data.abnormal}</span></div>
	      				</div>
	      			</div>
	    		</div>
	    		<div className='col-12 mt-2'>
		        	<Chart date={start_date+' - '+end_date} categories={categoryList} items={itemList} archivedOrderedItems={archivedOrderedItemList}/>
		        </div>
		        <div className='col-12 mt-2'>
		        	<ArchivedOrderReport archivedOrderList={archivedOrderList.filter(filterArchivedOrder)} archivedOrderedItemList={archivedOrderedItemList}/>
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
    itemList:ItemSelector.getItemList(state),
    categoryList: CategorySelector.getCategoryList(state)
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