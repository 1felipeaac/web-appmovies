import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    /* grid-template-rows: 11.6rem auto; */
    grid-template-areas: 
    "header"
    "content"
    ;
    
    > main{
        grid-area: content;
        overflow-y: auto;

        #searchBox{

            #movieSearch{
                padding-top: 5rem;
                display: flex;
                align-items: center;


                h2{
                    max-width: 20rem;
                    width: 100%;
                }

                #formSearch{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    width: 100%;
                }
            }
    
            #tagBox{
                border-radius: 1rem;
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: center;
        
                button{
                    margin: 1rem;
                }
            }

        }

    }

`;

export const InputSearch = styled.input`
    
    /* max-width: 50rem; */
    width: 100%;
    /* flex-grow: 1; */
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};

    padding: 1.9rem 2.4rem;

    border: 0;
    border-radius: 1rem;
`;