import * as types from './actionTypes';

const initialList = [];
const initialError = '';

export function smurfReducer(smurfList = initialList, action) {
    switch (action.type) {
        case types.GET_SMURFS:
            return action.payload;
        case types.ADD_SMURF:
            return action.payload;
        default:
            return smurfList;
    }
};

export function errorReducer(errorMessage = initialError, action) {
    switch (action.type) {
        case types.ERROR_MESSAGE:
            return action.payload;
        default:
            return errorMessage;
    }
};