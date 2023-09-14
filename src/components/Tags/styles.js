import styled from 'styled-components';

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    border: 0;
    border-radius: 1rem;

    width: max-content;
    height: 3rem;

    padding: .8rem 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
`;