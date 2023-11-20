import styled from '@emotion/styled';

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    width: 541px;
    padding: 40px;
    border-radius: 24px;
    position: relative;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    font-weight: 600;
`