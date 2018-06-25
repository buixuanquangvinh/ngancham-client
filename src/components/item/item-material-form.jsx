import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppInput, AppSelect } from 'components/common-ui'

export default class ItemMaterialForm extends Component {

  constructor(props){
    super(props)
    let form = {
      material_id:'',
      material_cost:0
    }
    if(props.itemMaterial)
      form = {...form,...props.itemMaterial}
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
    const { material_id, material_cost } = this.state
    const { edit, submit, remove } = this
    const { itemMaterial, materialOptions } = this.props
  	return (
      <div className='row mb-1'>
        <div className='col-5'><AppSelect name='material_id' label='Material' value={material_id} options={materialOptions} onChange={edit} compact={itemMaterial} disabled={itemMaterial}/></div>
        <div className='col-5'><AppInput name='material_cost' label='Cost' value={material_cost} onChange={edit} compact={itemMaterial} disabled={itemMaterial}/></div>
        <div className='col-2'>
          {itemMaterial?null:<button className='btn btn-success' onClick={submit}><i className='fas fa-save'></i></button>}
          {itemMaterial?<button className='btn btn-danger' onClick={remove}><i className='fas fa-times'></i></button>:null}
        </div>
      </div>
    )
	}

}

ItemMaterialForm.propTypes = {
  itemMaterial: PropTypes.object,
  submit: PropTypes.func,
  remove: PropTypes.func
}