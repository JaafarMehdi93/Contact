import { CONTACT, CONTACT_FAILURE, CONTACT_SUCCESS } from '../actions'

const initialState = {
	error: null,
	data: null,
	response: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CONTACT:
			return { ...state, data: action.payload.data, response: false }
		case CONTACT_SUCCESS:
			return { ...state, response: true }
		case CONTACT_FAILURE:
			return { ...state, error: action.payload.error, response: false }
		default:
			return state
	}
}
