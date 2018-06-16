import { put, takeLatest, call } from 'redux-saga/effects'
import { CONTACT, contactFailure, contactSuccess } from '../actions'
import { fetchService } from '../services/index'
function* contactSaga({ payload }) {
	try {
		// let response = yield call(fetchService, process.env.SERVER_URL, 'POST',  payload.data)
		yield put(contactSuccess())
	} catch (error) {
		yield put(contactFailure(error.message))
	}
}

function* watchStartup() {
	yield takeLatest(CONTACT, contactSaga)
}

export default watchStartup
