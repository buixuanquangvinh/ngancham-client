import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'
import { AppInput, AppSelect, AppMultiSelect } from 'components/common-ui'

import { Item } from 'components/item'

export default class OrderForm extends Component {

	constructor(props){
  	super(props)
  	this.state = {
  		filter:{
    			category:''
    		},
    		form:{
    			order_number:'',
    			order_items:[]
    		}
  	}
	}

	editFilter = (e)=>{
		this.setState({...this.state,filter:{...this.state.filter, [e.target.name]:e.target.value } })
	}

  editForm =(e)=>{
    this.setState({...this.state,form:{...this.state.form, [e.target.name]:e.target.value } })
  }

	addOrderItem = (item)=>{
		const { form } = this.state
  	let order_item = {
      ...item,
      temp_id:uniqueId('order_item'),
      number_of_item:1,
      item_modifiers:[],
      status:'pending'
    }
    this.setState({...this.state, form:{...form,order_items:[...form.order_items,order_item]} })
	}

  editOrderItem = (temp_id,key,value)=>{
    const { order_items } = this.state.form
    let new_order_items = order_items.map((order_item)=>{
      if(order_item.temp_id==temp_id)
        return {...order_item,[key]:value}
      else return order_item
    })
    this.setState({...this.state, form:{...this.state.form, order_items:new_order_items} })
  }

	removeOrderItem = (orderItem)=>{
		const { form } = this.state
    this.setState({...this.state, form:{...form,order_items: form.order_items.filter((order_item)=>order_item.temp_id!=orderItem.temp_id)} })
	}

  getItemPrices = (id)=>{
    const { itemPriceList } = this.props
    return itemPriceList.filter((price)=>price.item_id==id).map((price)=>{ 
      return { value:price.item_price, label:price.item_price_name+' : '+price.item_price } 
    })
  }

  getItemModifiers = (id)=>{
    const { itemModifierList } = this.props
    return itemModifierList.filter((modifier)=>modifier.item_id==id).map((mod)=>{
      return { value:mod.id, label:mod.item_modifier_name } 
    })
  }

  submit = ()=>{
    this.props.submit(this.state.form)
  }

	render(){
		const { filter, form } = this.state
		const { categoryOption, itemList, loading } = this.props
		const { editFilter, editForm, addOrderItem, editOrderItem, removeOrderItem, getItemPrices, getItemModifiers, submit } = this
	  	return (
	      	<div className="row">
	        	<div className="col-12 col-md-6 mt-2">
              <div className='row'>
  	        		<div className='col-8 col-md-6'><AppInput name='order_number' label='Number' value={form.order_number} onChange={editForm}/></div>
          			<div className='col-4 col-md-6'><button className='btn btn-primary btn-block' onClick={loading?null:submit}>TẠO</button></div>
                <div className='col-12' > 
  	        		 {form.order_items.map((orderItem)=>{
  			            return(
                      <OrderItem 
                        key={orderItem.temp_id}
                        orderItem={orderItem}
                        edit={(e)=>editOrderItem(orderItem.temp_id,e.target.name,e.target.value)} 
                        prices={getItemPrices(orderItem.id)} 
                        modifiers={getItemModifiers(orderItem.id)}
                        remove={()=>removeOrderItem(orderItem)}
                      />
  			            )
                  })}
                </div>
              </div>
	        	</div>
	        	<div className="col-12 col-md-6 mt-2">
	        		<div className='row'>
	        			<div className='col-12'>
	        				<AppSelect name='category' label='Category' value={filter.category} options={categoryOption} onChange={editFilter}/>
	        			</div>
                <div className='col-12 mt-2'>
                  <div className='row'>
      					    {itemList.filter((item)=>filter.category?item.category_id==filter.category:true).map((item)=>{
      					        return <div className='col-12 col-md-4' key={item.id} onClick={()=>addOrderItem(item)}><Item item={item}/></div>
      					    })}
                  </div>
                </div>
				    </div>
	        	</div>
	      	</div>
	    )
	}
}

class OrderItem extends Component {

  render(){
    const { orderItem, prices, modifiers, edit, remove } = this.props
    return (
      <div className='card mt-1 mb-1'>
        <div className='card-body row p-1'>
          <div className='col-6 col-md-2'>{orderItem.item_name}</div>
          <div className='col-6 col-md-3'>
            <button className='btn btn-light' name='number_of_item' onClick={orderItem.number_of_item>1?edit:null} value={orderItem.number_of_item-1}><i className='fas fa-minus'/></button>&nbsp;
            {orderItem.number_of_item}&nbsp;
            <button className='btn btn-light' name='number_of_item' onClick={edit} value={parseInt(orderItem.number_of_item)+1}><i className='fas fa-plus'/></button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-danger' onClick={remove}><i className='fas fa-times'/></button>
          </div>
          <div className='col-6 col-md-3'>
            <AppSelect name='item_price' label='prices' value={orderItem.item_price} options={prices} onChange={edit} compact='true'/>
          </div>
          <div className='col-6 col-md-4'>
            <AppMultiSelect name='item_modifiers' label='modifiers' value={orderItem.item_modifiers} options={modifiers} onChange={ (value)=>edit({target:{name:'item_modifiers',value:value}}) } compact='true'/>
          </div>
        </div>
      </div>
    )
  }

}