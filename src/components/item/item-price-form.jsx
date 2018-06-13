import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppInput } from 'components/common-ui'

export default class ItemPriceForm extends Component {

  constructor(props){
    super(props)
    let form = {
      item_price_name:'',
      item_price:0
    }
    if(props.itemPrice)
      form = {...form,...props.itemPrice}
    this.state = form
  }

  edit = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit = ()=>{
    this.props.submit({...this.state,item_id:this.props.item.id})
  }

  remove = ()=>{
    this.props.remove(this.state)
  }

	render(){
    const { item_price_name, item_price } = this.state
    const { edit, submit, remove } = this
    const { itemPrice } = this.props
  	return (
      <div className='row mb-1'>
        <div className='col-5'><AppInput name='item_price_name' label='Tên Giá' value={item_price_name} onChange={edit} compact={itemPrice}/></div>
        <div className='col-5'><AppInput name='item_price' label='Giá' value={item_price} onChange={edit} compact={itemPrice}/></div>
        <div className='col-2'>
          <button className='btn btn-success' onClick={submit}><i className='fas fa-save'></i></button>&nbsp;&nbsp;
          {itemPrice?<button className='btn btn-danger' onClick={remove}><i className='fas fa-times'></i></button>:null}
        </div>
      </div>
    )
	}

}

ItemPriceForm.propTypes = {
  itemPrice: PropTypes.object,
  submit: PropTypes.func,
  remove: PropTypes.func
}