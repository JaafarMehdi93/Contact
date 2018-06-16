

export const fetchService = async (url, methode = 'GET' , data ) => {
	try {
		const response = await fetch(url, methode, data)
		if (response.ok) {
			const json = await response.json()
			return response.json()
		} else {
			throw new Error(`Somtong wrong with url ${url}  status: ${response.status}`)
		}
	} catch (error) {
		throw error
	}
}
