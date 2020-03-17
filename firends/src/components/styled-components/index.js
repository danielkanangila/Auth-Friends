import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1.5rem;
    @media (min-width: 750px) {
        padding: 0 3.5rem;
    }
`;

export const Error = styled.div`
    background-color: #bf360c;
    color: #fff;
    padding: 15px;
    margin-bottom: 20px;
`;

const CustomInput = () => {
    return `
        padding: 1rem;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 25px;
        font-size: 15px;
        transition: .3s;
        &:focus {
            box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
            border-color: transparent;
        }
    `
}

const CustomButton = () => {
    return `
        padding: 15px;
        font-size: 0.9rem;
        text-transform: uppercase;
        background-color: #512da8;
        color: #fff;
        border-radius: 25px;
        margin: 15px 0;
        transition: .3s;
        &:hover {
            background-color: #311b92;
        }
    `
}

export const StyledForm = styled.form`
    max-width: 450px;
    margin: 65px auto;
    display:  flex;
    flex-direction: column;
    padding: 45px 15px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    h1 {
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }
    input {
        ${CustomInput()}
        width: 100%;
    }
    button {
        width: 100%;
        ${CustomButton()}
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 40px 0;
`;

export const Input = styled.input`
    ${CustomInput()}
`;

export const Button = styled.button`
    ${CustomButton()}
    margin: 0;
    background-color: ${props => props.__type === 'primary' ? '#fff' : '#512da8'};
    border: ${props => props.__type === 'primary' ? '1px solid #512da8' : 'none'};
    color: ${props => props.__type === 'primary' ? '#512da8' : '#fff'};
    &:hover {
        background-color: ${props => props.__type === 'primary' ? '#512da8' : '#311b92'};
        color: ${props => props.__type === 'primary' ? '#fff' : '#fff'};
    }
`;