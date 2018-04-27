import { ipcRenderer } from 'electron'
import React, { Component } from 'react'

export default class Printer extends Component {

	constructor(props){
		super(props)
		this.state={}
	}

	componentDidMount(){
		ipcRenderer.on("print-process", (event, arg) => {
			this.setState(arg,()=>{
				ipcRenderer.send("ready-to-print")
			})
        })
	}

	render(){
	  	return (
	      <div>{JSON.stringify(this.state)}</div>
	    )
	}

}