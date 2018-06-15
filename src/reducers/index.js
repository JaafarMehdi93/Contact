import { STARTUP, STARTUP_FAILURE, STARTUP_SUCCESS } from '../actions'

const initialState = {
	error: null,
	data: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case STARTUP:
			return { ...state, data: null }
		case STARTUP_SUCCESS:
			return { ...state, data: action.payload.data }
		case STARTUP_FAILURE:
			return { ...state, error: action.payload.error }
		default:
			return state
	}
}
