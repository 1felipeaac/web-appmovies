import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 1rem;

    border: none;

    padding: 1.9rem 1.6rem;

    resize: none;

`;