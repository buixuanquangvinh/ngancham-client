import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CategoryAction, CategorySelector } from 'features/category'
import { ItemAction } from 'features/item'
import { MaterialAction } from 'features/material'

import { AppModal } from 'components/common-ui'
import { CategoryForm } from 'components/category'
import { ItemForm } from 'components/item'
import { MaterialForm } from 'components/material'
import { RoomForm } from 'components/room'
import { UserForm } from 'components/user'

class Foot extends Component {
	render(){
        const { pathname } = this.props.location
        const { categoryOptions, createItem, createCategory, createMaterial, createRoom, createUser } = this.props
        return (
            <footer className="navbar fixed-bottom text-light" style={{zIndex:'1050',display:'flex',justifyContent:'space-around',backgroundColor:'#6610f2'}}>
              <span style={{fontSize:'30px'}}><i className="fas fa-cogs"></i></span>
              <div style={{marginTop:'-50px'}}>
                <AppModal id="add-form" label={<i className="fas fa-plus"></i>} style={{borderRadius:'50%',fontSize:'30px',width:'70px',backgroundColor:'#6610f2',border:'none'}}>
                    {pathname=='/category'?<CategoryForm submit={createCategory}/>:null}
                    {pathname=='/item'?<ItemForm categoryOptions={categoryOptions} submit={createItem}/>:null}
                    {pathname=='/material'?<MaterialForm submit={createMaterial}/>:null}
                    {pathname=='/room'?<RoomForm submit={createRoom}/>:null}
                    {pathname=='/user'?<UserForm submit={createUser}/>:null}
                </AppModal>
              </div>
              <span style={{fontSize:'30px'}}>
                <a href="tel:+84936865068" className="text-white"><i className="fas fa-phone"></i></a>
              </span>
            </footer>
        )
	}

}

const mapStateToProps = (state) => {
  return {
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (category) => dispatch({ type:CategoryAction.CREATE_CATEGORY, payload: category }),
    createItem: (item) => dispatch({ type:ItemAction.CREATE_ITEM, payload:item }),
    createMaterial: (material) => dispatch({ type:MaterialAction.CREATE_MATERIAL, payload:material }),
    createRoom: (room) => dispatch({ type:RoomAction.CREATE_ROOM, payload: room }),
    createUser: (user) => dispatch({ type:UserAction.CREATE_USER, payload: user }),
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foot)