import * as types from './actionTypes';

const initialList = [];

export function smurfReducer(smurfList = initialList, action) {
    switch (action.type) {
        case types.GET_SMURFS:
            return action.payload;
        case types.ADD_SMURF:
            return smurfList.concat(action.payload);
        default:
            return smurfList;
    }
};