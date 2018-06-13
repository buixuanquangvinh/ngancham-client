import React, { Component } from 'react'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown.src.js';
drilldown(Highcharts)

import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { AppCurrency } from 'components/common-ui'

export default class Chart extends Component {

	componentWillReceiveProps(next_props){
		this.drawChart(next_props)
	}

	chartOption = (props)=>{
		const { date, categories, items, archivedOrderedItems } = props
		let series = []
		let drilldowns = []

		map(groupBy(items,(item)=>item.category_id),(el,k)=>{
			//get name
			let name = 'Không xác định'
			let thisCategory = categories.filter((c)=>c.id==k)[0]
			if(thisCategory)
				name = thisCategory.category_name

			//get series data
			let thisArchivedOrderItems =  archivedOrderedItems.filter((aoi)=>el.map((e)=>e.id).indexOf(aoi.item_id)>-1)
			let series_data = reduce(thisArchivedOrderItems,(sum,n)=>n.status=='done'?sum+n.number_of_item:sum,0)

			//get drilldown data
			let drilldown_data = []
			el.map((i)=>{
				let item_data = archivedOrderedItems.filter((aoi)=>aoi.item_id==i.id)
				drilldown_data.push([
					i.item_name, reduce(item_data,(sum,n)=>n.status=='done'?sum+n.number_of_item:sum,0)
				])
			})

			series.push({ name:name, y: series_data , drilldown:k })
			drilldowns.push({ name:'bán ra', type: 'column', id:k, data: drilldown_data })
		})
		return {
			title: {
			    text: 'Số lượng bán ra'
			},
			subtitle: {
			    text: date
			},
			legend: {
		        enabled: false
		    },
			xAxis: {
			    type: 'category'
			},
			yAxis: {
			    min: 0,
			    title: {
		            text: 'Số lượng bán ra'
		        }
			},
			plotOptions: {

		    },
			series: [{
				name:'Số lượng bán',
				type: 'column',
				colorByPoint: true,
				data:series
			}],
			drilldown: {
        		series: drilldowns
            }
		}
	}

	drawChart = (props)=>{
		Highcharts.chart('report',this.chartOption(props))
	}

	render(){
	  	return (
	      	<div className="row">
		        <div className='col-12'>
		        	<div id='report'></div>
		        </div>
	      	</div>
	    )
	}

}