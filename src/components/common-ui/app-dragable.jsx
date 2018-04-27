import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

const source = {

  beginDrag(props, monitor, component) {
    return props.dragItem
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class AppDragable extends Component{

	render(){
		const { children, connectDragSource } = this.props
		return connectDragSource(<div>{children}</div>)
	}
}

export default DragSource((props) => {return props.type}, source, collect)(AppDragable)