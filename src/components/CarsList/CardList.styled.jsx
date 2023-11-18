import styled from '@emotion/styled';

export const CardListWrap = styled.ul`
@media screen and (max-width: 767px) {
    gap: 29px ;
    margin-bottom: 40px;
}
    display: flex;
    justify-content: center;
    gap: 50px 29px ;
    flex-wrap: wrap;
    margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
margin-left: auto;
margin-right: auto;
    color: var(--blueCl);
    font-weight: 500;
    font-size: 16px;
    text-decoration: underline;

    :hover {
        color: var(--hoverBlueCl);
    }
`