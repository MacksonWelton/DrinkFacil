import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width: 500px;
    background-color: #ebebeb;
    margin: 20px 20px;
    -webkit-box-shadow: 5px 6px 4px -1px rgba(0,0,0,0.98); 
    box-shadow: 5px 6px 4px -1px rgba(0,0,0,0.60);
`

export const Image = styled.img`
    width: 40%;
    min-width: 90px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentTitle = styled.div`
    background-color: #ed6d35;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    color: #fff;
    cursor: pointer;
    font-size: 20px;
`;