import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppDragable } from 'components/common-ui'

class Order extends Component {

	render(){
		const { order } = this.props
  	return (
      <AppDragable type="order" dragItem={order}>
        <div className="mb-3 border rounded p-2 text-center">
          {order.order_number}
        </div>
      </AppDragable>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)