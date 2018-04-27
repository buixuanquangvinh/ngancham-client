import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TableAction, TableSelector } from 'features/table'
import OrderedItemCreator from './ordered-item-creator'

class TableButtons extends Component {
  
	render(){
    const { table, checkout, selectTable } = this.props
  	return (
      <div className='row'>
        <div className='col-12'>
          <button className='btn btn-success btn-block mb-2' onClick={()=>checkout(table)}>THANH TOÁN</button>
          <OrderedItemCreator/>
          <button className='btn btn-warning btn-block mt-2' onClick={()=>selectTable({})}>BỎ CHỌN</button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    table: TableSelector.getCurrentTable(state)
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    checkout: (table)=>dispatch({ type:TableAction.CHECKOUT_TABLE, payload:table }),
    selectTable: (table)=>dispatch({ type:TableAction.SELECT_TABLE, payload:table })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableButtons)