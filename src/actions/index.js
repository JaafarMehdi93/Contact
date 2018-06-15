export const STARTUP = 'STARTUP'
export const STARTUP_SUCCESS = 'STARTUP_SUCCESS'
export const STARTUP_FAILURE = 'STARTUP_FAILURE'

export const startup = () => ({
	type: STARTUP,
})

export const startupSuccess = data => ({
	type: STARTUP_SUCCESS,
	payload: {
		data,
	},
})

export const startupFailure = error => ({
	type: STARTUP_FAILURE,
	payload: {
		error,
	},
})
