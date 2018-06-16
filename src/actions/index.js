export const CONTACT = 'CONTACT'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'
export const CONTACT_FAILURE = 'CONTACT_FAILURE'

export const contact = data => ({
	type: CONTACT,
	payload: {
		data,
	},
})

export const contactSuccess = response => ({
	type: CONTACT_SUCCESS,
	payload: {
		response,
	},
})

export const contactFailure = error => ({
	type: CONTACT_FAILURE,
	payload: {
		error,
	},
})
