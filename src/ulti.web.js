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
	return null
}

export const printReceiptListener = (cb)=>{
	return null
}

export const beginPrintReceipt = ()=>{
	return null
}