import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled(Link)`

    margin-top: 4rem;

    color: ${({theme}) => theme.COLORS.WHITE};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 3.2rem;

    border-radius: 1rem;

    > p {

        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        word-break: break-all;

        font-size: 1.6rem;
    }

    > span{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .8rem;
    }

`;

