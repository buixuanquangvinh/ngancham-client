import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Category extends Component {

	render(){
		const { category } = this.props
  	return (
      <div className="mt-1 border rounded p-1">
        {category.category_name}
      </div>
    )
	}

}

Category.propTypes = {
  category: PropTypes.object
}