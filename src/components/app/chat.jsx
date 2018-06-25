import React, { Component } from 'react'
import firebase from "firebase"

const config = {
  apiKey: "AIzaSyD4h6QwUKjdKcv4ddyvRP5CnZWmwpYBWRY",
  authDomain: "ngancham-comunication.firebaseapp.com",
  databaseURL: "https://ngancham-comunication.firebaseio.com",
  projectId: "ngancham-comunication",
  storageBucket: "ngancham-comunication.appspot.com",
  messagingSenderId: "559006565113"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BLE3YSIeh1EwDw39ky8C35PsSMPEm5zrCfq7NI7P6G7mLQ4cduxqzAGIBrcFym0MGND_vcOIJfENk_aAF8WUi4w')

export default class Chat extends Component {

  componentDidMount(){
    messaging.requestPermission().then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
  }

	render(){
  	return (
      <div>Chat</div>
    )
	}

}