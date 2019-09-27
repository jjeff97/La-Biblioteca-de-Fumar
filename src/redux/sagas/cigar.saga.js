
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//all cigars
function* getAllCigarInfo(action) {
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
//get one cigar
function* getCigarInfo(action){
    try{
        const response = yield axios.get('api/cigar/single', action.payload.id);
        yield put({
            type: 'SET_ONE_CIGAR_INFO',
            payload:{
                ...response.data[0],
            },
        })
    } catch(err) {
        console.log('GET movie error: ', err);
    }
    
}

function* cigarUpdateSaga(action) {
    try {
        yield axios.put(`api/cigar/single/${action.payload.id}`, action.payload);
        yield put({ type: 'SET_CIGAR_INFO' });
    } catch(err) {
        console.log('PUT movie error: ', err);
    }

}


function* cigarSaga() {
    yield takeLatest('GET_CIGAR_INFO', getAllCigarInfo);
    yield takeLatest('PUT_CIGAR_INFO', newCigarInfoSaga);
    yield takeLatest('POST_ONE_CIGAR_INFO', getCigarInfo);
    yield takeLatest('GET_CIGAR_INFO', cigarUpdateSaga);
    yield takeLatest('GET_CIGAR_ONE_INFO', newCigarInfoSaga);
}

function* newCigarInfoSaga(action) {
    try {
        yield axios.post('/api/cigar', action.payload);
        yield put({ type: 'GET_CIGAR_INFO' });
        yield put ({ type:'GET_ONE_CIGAR_INFO' });
    } catch(err) {
        console.log('PUT cigar error: ', err);
    }
}
  export default cigarSaga;