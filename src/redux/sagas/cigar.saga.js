
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getCigarInfo(action) {
    try {
        const response = yield axios.get('api/cigar');
        yield put({
            type: 'SET_CIGAR_INFO',
            payload: response.data.action,
        });

    }catch(err) {
        console.log('GET cigars error: ', err);
    }

}

function* cigarSaga() {
    yield takeLatest('FETCH_CIGAR_INFO', getCigarInfo);
  }

  export default cigarSaga;