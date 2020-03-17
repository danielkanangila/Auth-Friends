import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../styled-components';

const Form = ({data, onSubmit}) => {
    const [state, setState] = useState(data);
    useEffect(() => {
        setState(data);
    }, [data])
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value.trim()
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(state);
    }
    return(
        <>
            {data.name !== undefined &&     
                <StyledForm onSubmit={handleSubmit}>
                    <Grid className="form-grid">
                        <Input value={state?.name} type="text" name="name" onChange={handleChange} placeholder="Name" />
                        <Input value={state?.email} type="email" name="email" onChange={handleChange} placeholder="Email" />
                        <Input value={state?.age} type="Age" name="age" onChange={handleChange} placeholder="Age" />
                    </Grid>
                    <Button onClick={handleSubmit}>{data.id ? 'Update' : 'Save'}</Button>
                </StyledForm>
            }
        </>
    )
}

const StyledForm = styled.form`
    .form-grid {
        padding: 30px 0;
    }   
`;

export default Form