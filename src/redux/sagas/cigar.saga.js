
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getCigarInfo(action) {
    try {
        const response = yield axios.get('/api/cigar');
        yield put({
            type: 'SET_CIGAR_INFO',
            payload: response.data,
        });

    }catch(err) {
        console.log('GET cigars error: ', err);
    }

}

function* cigarSaga(action) {
    yield takeLatest('GET_CIGAR_INFO', getCigarInfo);
    yield takeLatest('PUT_CIGAR_INFO', newCigarInfoSaga);
}

function* newCigarInfoSaga(action) {
    try {
        yield axios.post('/api/cigar', action.payload);
        yield put({ type: 'GET_CIGAR_INFO' });
    } catch(err) {
        console.log('PUT cigar error: ', err);
    }
}
  export default cigarSaga;