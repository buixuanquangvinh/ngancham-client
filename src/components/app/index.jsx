import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
//import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import Nav from './nav'

class App extends Component {

	render(){
		const { children } = this.props
  	return (
      <div>
        <Nav/>
        <div className='container-fluid' style={{marginTop:'60px'}}>  
          {children}
        </div>
      </div>
    )
	}

}

//export default DragDropContext(HTML5Backend)(App)
export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App)