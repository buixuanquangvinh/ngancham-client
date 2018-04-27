import React, { Component } from 'react'

export default class AppPagination extends Component{

	render(){
		const { page, pages, onClick } = this.props
		let pagesArr = Array.from(Array(pages).keys())
		return(
			<ul className="pagination">
				<li className={page==1?"active":""} style={{cursor:'pointer'}}><a onClick={()=>onClick(1)}>1</a></li>
				{page>8?<li><a>...</a></li>:null}
				{pagesArr.map((pageElement)=>{
					if(pageElement+1!=1 && pageElement+1!=pages && pageElement+1>parseInt(page)-8 && pageElement+1<parseInt(page)+8){
						return(
							<li key={pageElement} className={pageElement+1==page?"active":""} style={{cursor:'pointer'}}>
								<a onClick={()=>onClick(pageElement+1)}>{pageElement+1}</a>
							</li>
						)
					}
				})}
				{pages-page>8?<li><a>...</a></li>:null}
				<li className={page==pages?"active":""} style={{cursor:'pointer'}}><a onClick={()=>onClick(pages)}>{pages}</a></li>
			</ul> 
		)
	}
}