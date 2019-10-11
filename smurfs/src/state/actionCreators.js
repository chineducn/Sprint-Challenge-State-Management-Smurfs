import axios from 'axios';

import * as types from './actionTypes';

const smurfApi = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
    axios
        .get(smurfApi)
        .then(response => {
            const smurfs = response.data;
            dispatch({ type: types.GET_SMURFS, payload: smurfs, });
        })
        .catch(error => {
            debugger
        });
}