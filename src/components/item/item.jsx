import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

  render(){
    const { item } = this.props
    return (
      <div className="card mb-2">
        <div className="card-img-top" style={{minHeight:'40px'}}>
          <img className="d-none d-md-block" style={{width:'100%',height:'150px'}} src={item.item_img_url?item.item_img_url:'http://visitcorralejo.com/wp/wp-content/themes/WPBoots/functions/facebook/img/default_image.png'}/>
        </div>
        <div className="position-absolute rounded-bottom text-center p-2" style={{width:'100%',left:0,bottom:0,background:'rgba(0,0,0,0.5)',color:'#fff'}}>
          {item.item_name}
        </div>
      </div>
    )
  }

}

Item.propTypes = {
  item: PropTypes.object
}