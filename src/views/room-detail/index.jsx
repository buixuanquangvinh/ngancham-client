import React, { Component } from 'react'
import { connect } from 'react-redux'

import { OrderSelector, OrderAction } from 'features/order'

import PendingOrderedItemList from './pending-ordered-item-list'
import OrderList from './order-list'
import TakeAbleOrderList from './take-able-order-list'
import OrderDetail from './order-detail'

class RoomDetail extends Component {

	constructor(props){
		super(props)
		this.state = {
			checkPending:false
		}
	}

	componentDidMount(){
		this.props.selectOrder({})
	}

	render(){
		const { currentOrder } = this.props
		const { checkPending } = this.state
	  	return (
	      <div className="row">
	      	<div className="d-md-none col-12">
	        	{checkPending?
	        		(<div>
	        			<button className='btn btn-secondary btn-block mt-1 mb-1' onClick={()=>this.setState({checkPending:false})}>Danh sách Order</button>
	        			<PendingOrderedItemList {...this.props}/>
	        		</div>):
	        		(currentOrder.id?
		      			<OrderDetail {...this.props} os='mobile'/>:
			      		<div>
			      			<button className='btn btn-secondary btn-block mt-1 mb-1' onClick={()=>this.setState({checkPending:true})}>Đồ chưa có của phòng</button>
				        	<TakeAbleOrderList {...this.props}/>
				        	<OrderList {...this.props}/>
			        	</div>
			        )
	        	}
	        </div>
	        <div className="d-none d-md-block col-md-5">
	        	<TakeAbleOrderList {...this.props}/>
	        	<OrderList {...this.props}/>
	        </div>
	        <div className="d-none d-md-block col-md-7">
				{currentOrder.id?<OrderDetail {...this.props} os='desktop'/>:<PendingOrderedItemList {...this.props}/>}	        	
	        </div>
	      </div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
    currentOrder: OrderSelector.getCurrentOrder(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	selectOrder:(order)=> dispatch({ type:OrderAction.SELECT_ORDER, payload:order })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDetail)