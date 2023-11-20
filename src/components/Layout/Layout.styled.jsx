import styled from '@emotion/styled';

export const MainContainer = styled.div`
    padding-left: 24px;
    padding-right: 24px;
     padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (min-width: 768px) {
        padding-left: 95px;
    padding-right: 95px;
    padding-top: 100px;
    padding-bottom: 100px;
    }

    @media screen and (min-width: 1440px) {
        padding-left: 128px;
    padding-right: 128px;
    padding-top: 150px;
    padding-bottom: 150px;
    }
`

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--inputTexst);
    backdrop-filter: blur(20px);
    padding-top: 18px;
    padding-bottom: 18px;
    z-index: 1000;
`