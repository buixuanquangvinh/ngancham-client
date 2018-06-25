import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppModal, AppInput } from 'components/common-ui'

export default class Material extends Component {

	constructor(props){
		super(props)
		this.state = {
			material_amount:0,
			cost:0
		}
	}

	edit = (e)=>{
		this.setState({ [e.target.name]:e.target.value })
	}

	submit = ()=>{
		this.props.submit({...this.state,material_id:this.props.material.id})
	}

	render(){
	    const { material } = this.props
	    const { material_amount, cost } = this.state
	    const { edit, submit } = this
	    return (
	      	<div className="card mt-2">
		        <div className='card-body'>
		        	<div className='row'>
		        		<div className='col-3'>{material.material_name}</div>
		        		<div className='col-3'>{material.material_amount}</div>
		        		<div className='col-3'>{material.material_unit}</div>
		        		<div className='col-3'>
		        			<AppModal id={"material-add-form"+material.id} label={<i className="fas fa-plus"></i>}>
		        				<div className='row'>
		        					<div className='col-6 col-md-5 mt-2'>
		        						<AppInput label={material.material_unit} name='material_amount' value={material_amount} onChange={edit}/>
		        					</div>
		        					<div className='col-6 col-md-5 mt-2'>
		        						<AppInput label='vnd' name='cost' value={cost} onChange={edit}/>
		        					</div>
		        					<div className='col-12 col-md-2 mt-2'>
		        						<button className='btn btn-success btn-block' onClick={submit}>BUY</button>
		        					</div>
		        				</div>
		        			</AppModal>
		        		</div>
		        	</div>
		        </div>
	      	</div>
	    )
	}

}

Material.propTypes = {
  material: PropTypes.object
}