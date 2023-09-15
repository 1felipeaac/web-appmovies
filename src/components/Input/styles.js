import styled from 'styled-components';

export const Container = styled.div`
    /* max-width: 40rem; */
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    height: 5.6rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    border-radius: 1rem;

    margin-bottom: .8rem;
    padding: 2rem 1.6rem;
    
    > input {
        background: none;
        border: none;
        width: 100%;
        height: 3rem;
    }
    
`;