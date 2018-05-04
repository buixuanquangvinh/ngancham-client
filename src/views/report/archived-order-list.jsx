import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReportAction, ReportSelector } from 'features/report'

import ArchivedOrder from './archived-order'

class ArchivedOrderList extends Component {

  calSum = ()=>{
    const { archivedOrderList } = this.props
    let sum = 0
    archivedOrderList.map((archivedOrder)=>{
      sum+=archivedOrder.total_amount
    })
    return sum
  }

	render(){
    const { archivedOrderList } = this.props
    const { calSum } = this
  	return (
      <div className='row'>
        <div className='col-12 d-table mb-2'>
          <div className='d-table-row text-center'>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'>{calSum()}</div>
          </div>
          <div className='d-table-row text-center'>
            <div className='d-table-cell p-1'>Phòng</div>
            <div className='d-table-cell p-1'>Bàn</div>
            <div className='d-table-cell p-1'>Người tạo</div>
            <div className='d-table-cell p-1'>Người thu</div>
            <div className='d-table-cell p-1'>Số tiền</div>
          </div>
          {archivedOrderList.map((archivedOrder)=>{
            return <ArchivedOrder key={archivedOrder.id} archivedOrder={archivedOrder}/>
          })}
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    archivedOrderList: ReportSelector.getArchivedOrderList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchivedOrderList)