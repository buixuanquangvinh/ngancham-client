import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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

export default DragDropContext(HTML5Backend)(App);