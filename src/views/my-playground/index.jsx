import React, { Component } from 'react'

export default class MyPlayground extends Component{

	constructor(props){
		super(props)
		this.state = {
			user_name:''
		}
		this.myConnection = null
		this.dataChannel = null
	}

	componentDidMount(){
	}

	setupServerConnection = ()=>{
	  	serverConnection = new WebSocket("ws://localhost:4000")
	  	
	  	serverConnection.onopen = function () { 
   			console.log("Connected to the signaling server")
		} 

	  	serverConnection.onmessage = function (msg) {
		   var data = JSON.parse(msg.data);
			
		   	switch(data.type) { 
		      	case "login": 
		         	handleLogin(data.success)
		         	break
		      	case "offer": 
		         	handleOffer(data.offer, data.name)
		         	break
		      	case "answer": 
		         	handleAnswer(data.answer)
		         	break
		      	case "candidate":
		         	handleCandidate(data.candidate)
		         	break
		      	case "leave": 
		         	handleLeave()
		         	break
		      	default: 
		         	break
		   } 
		}
	}

	setUpPeerConnection = ()=>{
      	let configuration = { 
         	"iceServers": [{ "url": "stun:stun2.1.google.com:19302" }] 
      	} 
		
      	this.myConnection = new webkitRTCPeerConnection(configuration, {optional: [{RtpDataChannels: true}]})
		
      	// Setup ice handling 
     	myConnection.onicecandidate = function (event) { 
         	if (event.candidate) { 
            	send({
               		type: "candidate", 
               		candidate: event.candidate 
            	})
         	} 
      	}
			
	    //creating data channel 
	    this.dataChannel = myConnection.createDataChannel("channel1", {reliable:true}); 
			
	    dataChannel.onerror = function (error) { 
	        console.log("Ooops...error:", error); 
	    }
			
	    dataChannel.onmessage = function (event) { 
	        console.log(event)
	    }
			
	    dataChannel.onclose = function () { 
	        console.log("data channel is closed") 
	    }  
	}

	function handleOffer(offer, name) { 
	   connectedUser = name; 
	   yourConn.setRemoteDescription(new RTCSessionDescription(offer));
		
	   //create an answer to an offer 
	   yourConn.createAnswer(function (answer) { 
	      yourConn.setLocalDescription(answer); 
			
	      send({ 
	         type: "answer", 
	         answer: answer 
	      }); 
			
	   }, function (error) { 
	      alert("Error when creating an answer"); 
	   });
	}

	render(){
		return (
			<div className='card'>
    			<video id="video">Video stream not available.</video>
    			<div className='card-body row'>
    				<div className='col-6'>
    					<input value={this.state.user_name} onChange={ (e)=>this.setState({ user_name:e.target.value }) }/>
    				</div>
					<div className='col-6'>
						<button className='btn btn-primary'>Login</button>
					</div>
    			</div>		
			</div>
		)
	}

}