const singleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ONE_CIGAR_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default singleReducer;