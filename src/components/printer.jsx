import { ipcRenderer } from 'electron'
import React, { Component } from 'react'
import numeral from 'numeral'

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
				console.log(arg)
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
				<h2 style={{textAlign:'center'}}>{isNaN(sum_total)?'Hóa đơn gọi đồ':'Hóa đơn thanh toán'}</h2>
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
									<td>{name}</td>
									<td>{numeral(sum).format('0,0')}</td>
									<td>{ordered_item.number_of_item}</td>
									<td>{numeral(total).format('0,0')}</td>
								</tr>
							)
						})}
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>{isNaN(sum_total)?null:numeral(sum_total).format('0,0')}</td>
						</tr>
					</tbody>
				</table>
			</div>
	    )
	}

}