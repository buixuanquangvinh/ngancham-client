import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppDateRangePicker } from 'components/common-ui'
import { ReportAction, ReportSelector } from 'features/report'

class Filter extends Component {

	render(){
    const { filter, edit, fetchData } = this.props
  	return (
      <div className='row'>
        <div className='col-4'>
          <AppDateRangePicker label="time" start={filter.start_date} onChangeStart={(value)=>edit('start_date',value)} end={filter.end_date} onChangeEnd={(value)=>edit('end_date',value)}/>
        </div>
        <div className='col-3'>
          <button className='btn btn-primary' onClick={()=>fetchData(filter)}>Xem dữ liệu</button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    filter: ReportSelector.getFilter(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:ReportAction.EDIT_FILTER, payload:{ key:key, value:value } }),
    fetchData: (filter) => dispatch({ type:ReportAction.FETCH_DATA, payload: filter })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)