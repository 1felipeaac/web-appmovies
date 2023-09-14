import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    background-color: ${({theme}) => theme.COLORS.TULIP};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    max-width: 50rem;
    width: 100%;


    height: 5.6rem;
    border-radius: 1rem;
    border: 0;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    /* margin-top: 2rem; */
    &:disabled{
        opacity: 0.5;
    }
`;

