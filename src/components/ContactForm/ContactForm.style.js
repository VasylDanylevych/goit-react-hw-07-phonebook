import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    width: 500px;
    gap: 15px;
    flex-direction: column;

    & button {
        background-color: #99FFFF;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        width: 150px;
        height: 40px;
        font-size: 20px;
    }

    & button:active {
        background-color: #9999FF;
    }

    & label {
        font-size: 20px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`;

export const Input = styled.input`
    height: 35px;
    padding-left: 20px;
    border-radius: 4px;
    font-size: 15px;
`;

