import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppInput } from 'components/common-ui'

export default class ItemModifierForm extends Component {

  constructor(props){
    super(props)
    let form = {
      item_modifier_name:'',
      item_modifier_price:0
    }
    if(props.itemModifier)
      form = {...form,...props.itemModifier}
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
    const { item_modifier_name, item_modifier_price } = this.state
    const { edit, submit, remove } = this
    const { itemModifier } = this.props
  	return (
      <div className='row mb-1'>
        <div className='col-5'><AppInput name='item_modifier_name' label='Tên Mod' value={item_modifier_name} onChange={edit} compact={itemModifier} disabled={itemModifier}/></div>
        <div className='col-5'><AppInput name='item_modifier_price' label='Giá' value={item_modifier_price} onChange={edit} compact={itemModifier} disabled={itemModifier}/></div>
        <div className='col-2'>
          {itemModifier?null:<button className='btn btn-success' onClick={submit}><i className='fas fa-save'></i></button>}
          {itemModifier?<button className='btn btn-danger' onClick={remove}><i className='fas fa-times'></i></button>:null}
        </div>
      </div>
    )
	}

}

ItemModifierForm.propTypes = {
  itemModifier: PropTypes.object,
  submit: PropTypes.func,
  remove: PropTypes.func
}