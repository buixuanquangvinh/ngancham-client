import React, { Component } from 'react'
import numeral from 'numeral'

export default class AppCurrency extends Component{

	render(){
		const { children } = this.props
		return <span>{numeral(children).format('0,0')}</span>
	}
}