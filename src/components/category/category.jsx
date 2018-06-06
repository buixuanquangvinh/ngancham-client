import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Category extends Component {

	render(){
		const { category } = this.props
  	return (
      <div className="card mt-2">
        <div className='card-body'>{category.category_name}</div>
      </div>
    )
	}

}

Category.propTypes = {
  category: PropTypes.object
}