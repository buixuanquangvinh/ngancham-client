import React, { Component } from 'react'

export default class Category extends Component {

	render(){
		const { category } = this.props
  	return (
      <div className="media mt-1 border rounded p-1">
        <div className="media-body">
          {category.category_name}
        </div>
      </div>
    )
	}

}