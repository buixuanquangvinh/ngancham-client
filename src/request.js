import 'whatwg-fetch'
import Swal from 'sweetalert2'

const rootPath = 'https://ngancham.herokuapp.com/'
//const rootPath = 'http://localhost:3000/'
export default function request(path,option = {}){

	let defaultOption = {
		type:'json',
		method: 'GET',
		headers: {'content-type':'application/json',token:localStorage.token},
		mode: 'cors',
		cache: 'default'
	}
	let mergeOption = {...defaultOption,...option}
	
	return fetch(rootPath+path,mergeOption).then((response)=>{
		if(response.status!=200)
			return Promise.reject({message:response.statusText})
		else
			return response.json()
	}).then((result)=>{
		if(result.status!=200){
			return Promise.reject({message: result.responseMessage})
		}
		else
			return result.responseData
	}).catch(function(ex) {
		Swal('ERROR',ex.message, 'error')
		return Promise.reject(ex.message)
	})
}