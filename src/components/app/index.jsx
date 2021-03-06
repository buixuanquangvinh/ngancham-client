import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
//import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import Nav from './nav'
import Foot from './footer'
import { AppLoadingOverlay } from 'components/common-ui'

import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { OrderSelector } from 'features/order'
import { ReportSelector } from 'features/report'
import { RoomSelector } from 'features/room'

class App extends Component {

	render(){
    const { loading, children } = this.props
    const contentStyle = {
      marginTop:'70px',
      marginBottom:'80px',
      overflowX:'hidden',
      padding:'0px 5px'
    }
  	return (
      <AppLoadingOverlay loading={loading}>
        <Nav {...this.props}/>
        <div className='container-fluid' style={contentStyle}>  
          {children}
        </div>
        <Foot {...this.props}/>
      </AppLoadingOverlay>
    )
	}

}

const mapStateToProps = (state) => {
    return {
      loading:(CategorySelector.getLoading(state) ||
        ItemSelector.getLoading(state) ||
        OrderSelector.getLoading(state) ||
        ReportSelector.getLoading(state) ||
        RoomSelector.getLoading(state)
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//export default DragDropContext(HTML5Backend)(App)
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(Container)