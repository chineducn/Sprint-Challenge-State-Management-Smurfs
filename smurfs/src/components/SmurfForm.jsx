import React from 'react';
import { Field, Form, Formik } from 'formik';

export default function SmurfForm(props) {
    const { onSubmit } = props;
    const initialForm = {
        name: '',
        age: '',
        height: '',
    };

    return (
        <div>
            <Formik
                initialValues={initialForm}
                onSubmit={onSubmit}
                render={() => {
                    return (
                        <Form>
                            <div>
                                <label>
                                    Name
                                    <Field
                                        name='name'
                                        type='text'
                                        placeholder='Name'
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Age
                                    <Field
                                        name='age'
                                        type='number'
                                        placeholder='Age'
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Height
                                    <Field
                                        name='height'
                                        type='text'
                                        placeholder='Height'
                                    />
                                </label>
                            </div>
                            <button type='submit'>Add Smurf</button>
                        </Form>
                    )
                }}
            />
        </div>
    )
};