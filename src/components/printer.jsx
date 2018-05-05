import React, { Component } from 'react'
import { AppCurrency } from 'components/common-ui'
import { printReceiptListener, beginPrintReceipt } from 'ulti'

export default class Printer extends Component {

	constructor(props){
		super(props)
		this.state={
			table:{},
			archivedOrders:[],
			archivedOrderedItems:[]
		}
	}

	componentDidMount(){
		printReceiptListener((data)=>{
			this.setState(data,()=>beginPrintReceipt())
		})
	}

	render(){
		const { table, archivedOrders, archivedOrderedItems } = this.state
		let sum_total = 0
		archivedOrders.map((order)=>sum_total+=order.total_amount)
	  	return (
			<div>
				<h2 style={{textAlign:'center'}}>Hóa đơn thanh toán</h2>
				<h3 style={{textAlign:'center'}}>NGAN CHẬM</h3>
				<h4 style={{textAlign:'center'}}>
					Hóa đơn số: {archivedOrders.map((order)=>order.order_number+' ')} {table.id?"Bàn số: "+table.table_number:null}
				</h4>
				<table style={{width:'100%',fontSize:'20px',textAlign:'center'}}>
					<tbody>
						<tr>
							<th></th>
							<th>Giá</th>
							<th>#</th>
							<th>Thành tiền</th>
						</tr>
						{archivedOrderedItems.filter((ordered_item)=>ordered_item.status!='cancel').map((ordered_item)=>{
							let sum = 0
							let modifiers = []
							let name = ordered_item.item_name
							if(ordered_item.item_modifiers[0]=="[")
								modifiers = JSON.parse(ordered_item.item_modifiers) 
							else
								modifiers = JSON.parse(JSON.parse(ordered_item.item_modifiers))
							modifiers.map((mod)=>{
								name = name+' '+mod.item_modifier_name
								sum+=mod.item_modifier_price
							})
							sum += ordered_item.item_price
							let total = sum*ordered_item.number_of_item
							return(
								<tr key={ordered_item.id}>
									<td style={{textAlign:'left'}}>{name}</td>
									<td><AppCurrency>{sum}</AppCurrency></td>
									<td>{ordered_item.number_of_item}</td>
									<td><AppCurrency>{total}</AppCurrency></td>
								</tr>
							)
						})}
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td><AppCurrency>{sum_total}</AppCurrency></td>
						</tr>
					</tbody>
				</table>
			</div>
	    )
	}

}