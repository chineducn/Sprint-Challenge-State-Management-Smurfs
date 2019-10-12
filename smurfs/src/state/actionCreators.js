import axios from 'axios';

import * as types from './actionTypes';

const smurfApi = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
    axios
        .get(smurfApi)
        .then(response => {
            const smurfs = response.data;
            dispatch({ type: types.GET_SMURFS, payload: smurfs, });
            dispatch({ type: types.ERROR_MESSAGE, payload: '', });
        })
        .catch(error => {
            const errorMessage = `Error: ${error.response.status} ${error.response.statusText}`;
            dispatch({ type: types.ERROR_MESSAGE, payload: errorMessage, });
        });
};

export const addSmurf = (formValues, actions) => dispatch => {
    const smurfToPost = {
        name: formValues.name,
        age: formValues.age,
        height: formValues.height,
    };

    axios
        .post(smurfApi, smurfToPost)
        .then(response => {
            const newSmurfsFromApi = response.data;
            dispatch({ type: types.ADD_SMURF, payload: newSmurfsFromApi, });
            dispatch({ type: types.ERROR_MESSAGE, payload: '', });
            actions.resetForm();
        })
        .catch(error => {
            const errorMessage = error.response.data.Error;
            dispatch({ type: types.ERROR_MESSAGE, payload: errorMessage, });
        });
};