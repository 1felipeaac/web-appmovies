import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    background: none;
    color: ${({theme}) => theme.COLORS.TULIP};

    border: none;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

`;