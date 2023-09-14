import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    /* grid-template-rows: 11.6rem auto; */
    grid-template-columns: .25fr auto;
    grid-template-areas: 
    "header header"
    "tags content"
    ;


    width: 100%;
    height: 100vh;
    
    > main{
        grid-area: content;
        overflow-y: auto;
        

        #movieData{
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2{
                width: 20rem;
            }

            a{
                width: 30rem;
            }
        }
    }

    >aside{
        grid-area: tags;
        border-radius: 1rem;

        max-width: 10rem;
        width: 100%;

        button{
            margin: 1rem;
        }
    }
`;

export const InputSearch = styled.input`
    
    max-width: 50rem;
    width: 100%;
    /* flex-grow: 1; */
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};

    padding: 1.9rem 2.4rem;

    border: 0;
    border-radius: 1rem;
`;