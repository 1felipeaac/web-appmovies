import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    /* grid-template-rows: 11.6rem auto; */
    grid-template-areas: 
    "header"
    "content"
    ;
    
    > main {
        grid-area: content;
        overflow-y: auto;

        a {
            justify-content: left;
            margin-bottom: 2.4rem;
        }
    }
`;

export const Form = styled.form`
    
    margin-top: 4rem;

    > div{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;

        margin-bottom: 4rem;
    }

    > textarea{
        margin-bottom: 4rem;
    }

    > section {
    
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        padding: 1.6rem;

        border-radius: 1rem;
        border: none;

        margin-top: 2.4rem;
        margin-bottom: 4rem;

        #tags{
            display: flex;
            gap: 2.4rem;
            flex-wrap: wrap;
        }
    }

    > #buttons{

        display: flex;
        justify-content: center;

        color: ${({theme}) => theme.COLORS.WHITE};
        a {
            /* width: 25em; */
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`;



