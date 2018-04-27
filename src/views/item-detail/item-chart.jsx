import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import moment from 'moment'
import numeral from 'numeral'
import groupBy from 'lodash/groupBy'
import uniq from 'lodash/uniq'
import reduce from 'lodash/reduce'

import { ItemSelector } from 'features/item'

class ItemChart extends Component {

  componentDidMount(){
    this.drawChart()
  }

  drawChart = ()=>{
    const { item } = this.props

    let labels = [1,2,3,4,5,6,7]
    //let start_date = moment(transactionFilter.start_date,"DD-MM-YYYY")
    //const end_date = moment(transactionFilter.end_date,"DD-MM-YYYY")
    //while(start_date.isSameOrBefore(end_date)){
    //  labels.push(start_date.format("DD/MM"))
    //  start_date = start_date.add(1, 'days')
    //}

    let processedData = []

    processedData.push({
      type: 'spline',
      showInLegend: false,
      name: item.item_name,
      color: '#44bd32',
      data: [100,150,250,300,180,260,280]
    })

    var myChart = Highcharts.chart('item-chart', {
      chart:{
        height: 350,
        backgroundColor:"#f8f9fa"
      },
      title: {
        text:null,
        style: {
          textTransform: 'uppercase',
          fontSize: '14px'
        }
      },
      xAxis: {
        title: { text: 'Ngày',
          style: {
          } 
        },
        categories: labels,
        labels: {
            style: {
          }
        }
      },
      yAxis: {
        min: 0,
        title: {text: 'Spend Amount'},
        labels: {
            formatter: function () {
              return numeral(this.value).format('0,0')
            },
            style: {
            }
        },
      },
      plotOptions: {
        spline: {
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 5
            }
          },
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
          formatter: function () {
            return '<b>'+this.series.name+'</b><br/>'+'Amount Spend : '+numeral(this.y).format('0,0')+' VNĐ ';
          }
      },
      series: processedData                                                                                 
    })
  }

  render(){
    return (
      <div id='item-chart' style={{color:'hsla(0,0%,100%,0.86)'}}></div>
    )
  }

}

const mapStateToProps = (state,props) => {
  return {
    item: ItemSelector.getItem(state,props.params.id)
  }
}

export default connect(
  mapStateToProps
)(ItemChart)