import { put, takeLatest } from 'redux-saga/effects'
import { STARTUP, startupFailure, startupSuccess } from '../actions'

function* startupSaga() {
	try {
		yield put(startupSuccess([1, 2, 3]))
	} catch (error) {
		yield put(startupFailure(error.message))
	}
}

function* watchStartup() {
	yield takeLatest(STARTUP, startupSaga)
}

export default watchStartup
