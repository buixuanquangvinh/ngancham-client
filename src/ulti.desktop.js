import { ipcRenderer } from 'electron'

export const isRole = (...roles)=>{
	const user = JSON.parse(localStorage.user)
	let result = false
	user.roles.map((role)=>{
		if(roles.indexOf(role)>=0)
			result = true
	})
	return result
}

export const printReceipt = (data)=>{
	ipcRenderer.send('print',data)
}

export const printReceiptListener = (cb)=>{
	ipcRenderer.on("print-process", (event, arg) => cb(arg))
}

export const beginPrintReceipt = ()=>{
	ipcRenderer.send("ready-to-print")
}