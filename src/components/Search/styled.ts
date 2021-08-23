import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    width: 50%;
`

export const Input = styled.input`
    background-color: #ebebeb;
    border: none;
    border-radius: 20px;
    height: 50px;
    width: 100%;
    min-width: 200px;
    padding: 0px 20px;
    margin: 20px;

    &:focus {
        outline: none;
    }
`;