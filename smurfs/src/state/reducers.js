import * as types from './actionTypes';

const initialList = [];

export function smurfReducer(smurflist = initialList, action) {
    switch (action.type) {
        case types.GET_SMURFS:
            return action.payload;
        default:
            return smurflist;
    }
};