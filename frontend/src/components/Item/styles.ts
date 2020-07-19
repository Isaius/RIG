import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    width: 450px;
    border: 1;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-radius: 5px;
    background: #FFF;

`;
    
export const Name = styled.div`
    padding: 10px;
`;

export const Info = styled.div`
    display: columm;
    align-items: center;
    
    p {
        font-size: 12px;
    }
`;

    export const InfoBox = styled.div`
        display: flex;
    justify-content: space-between;
    align-items: center;
`;