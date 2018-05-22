import React, { Component } from 'react'

export default class Order extends Component {
  
	render(){
		const { order } = this.props
  	return (
      <div className="mb-3 border rounded p-2 text-center">
        {order.order_number}
      </div>
    )
	}

}