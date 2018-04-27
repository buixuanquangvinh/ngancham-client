import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

const target = {

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    // Obtain the dragged item
    const item = monitor.getItem();
    props.onDrop(item)
  }

}

function collect(connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget()
  }
}

class AppDropable extends Component{

	render(){
    const { children, isOver, connectDropTarget } = this.props;

		return connectDropTarget(<div className={isOver?"bg-warning":""}>{children}</div>)
	}
}

export default DropTarget((props) => {return props.type}, target, collect)(AppDropable);