import React, { Component } from 'react'

export default class Item extends Component {

	render(){
		const { item } = this.props
  	return (
      <div className="card mb-2">
        <a href={"#/item/"+item.id}>
          <img className="card-img-top" style={{height:'200px'}} src={item.item_img_url?item.item_img_url:'http://visitcorralejo.com/wp/wp-content/themes/WPBoots/functions/facebook/img/default_image.png'}/>
          <div className="position-absolute rounded-bottom text-center p-2" style={{width:'100%',left:0,bottom:0,background:'rgba(0,0,0,0.5)',color:'#fff'}}>
            {item.item_name}
          </div>
        </a>
      </div>
    )
	}

}