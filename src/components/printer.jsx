import { ipcRenderer } from 'electron'
import React, { Component } from 'react'

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
		ipcRenderer.on("print-process", (event, arg) => {
			this.setState(arg,()=>{
				ipcRenderer.send("ready-to-print")
			})
        })
	}

	render(){
		const { table, archivedOrders, archivedOrderedItems } = this.state
		let sum_total = 0
		archivedOrders.map((order)=>sum_total+=order.total_amount)
	  	return (
			<div>
				<table style={{width:'100%',textAlign:'center'}}>
					<tbody>
						<tr>
							<th></th>
							<th>Giá</th>
							<th>#</th>
							<th>Thành tiền</th>
						</tr>
						{archivedOrderedItems.filter((ordered_item)=>ordered_item.status!='cancel').map((ordered_item)=>{
							let sum = 0
							let modifiers = JSON.parse(JSON.parse(ordered_item.item_modifiers))
							modifiers.map((mod)=>sum+=mod.item_modifier_price)
							sum += ordered_item.item_price
							let total = sum*ordered_item.number_of_item
							return(
								<tr key={ordered_item.id}>
									<td>{ordered_item.item_name}</td>
									<td>{ordered_item.sum}</td>
									<td>{ordered_item.number_of_item}</td>
									<td>{total}</td>
								</tr>
							)
						})}
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>{sum_total}</td>
						</tr>
					</tbody>
				</table>
			</div>
	    )
	}

}