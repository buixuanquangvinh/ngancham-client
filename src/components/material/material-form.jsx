import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppInput } from 'components/common-ui'

export default class MaterialForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      material_name:'',
      material_unit:'',
      material_amount:0
    }
  }

  edit = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit = ()=>{
    this.props.submit({...this.state})
  }

	render(){
    const { material_name, material_unit } = this.state
    const { edit, submit } = this
  	return (
      <div className='row mb-1'>
        <div className='col-12 col-md-5 mt-2'><AppInput name='material_name' label='Tên Material' value={material_name} onChange={edit}/></div>
        <div className='col-12 col-md-5 mt-2'><AppInput name='material_unit' label='Unit' value={material_unit} onChange={edit}/></div>
        <div className='col-12 col-md-2 mt-2'>
          <button className='btn btn-success btn-block' onClick={submit}><i className='fas fa-save'></i></button>
        </div>
      </div>
    )
	}

}

MaterialForm.propTypes = {
  submit: PropTypes.func
}