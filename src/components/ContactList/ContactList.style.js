import styled from 'styled-components';

export const List = styled.ul`
    margin-top: 30px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    width: 350px;

    & li {
        font-weight: 600;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }

    & button {
        background-color: tomato;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        width: 70px;
        height: 25px;
        font-size: 15px;
    }

    & button:active {
        background-color: #9999FF;
    }
`;