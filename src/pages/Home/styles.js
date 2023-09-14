import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    /* grid-template-rows: 11.6rem auto; */
    grid-template-areas: 
    "header"
    "content"
    ;

    justify-content: center;
    width: 100%;
    height: 100vh;
    
    > main{
        grid-area: content;
        overflow-y: auto;

        #searchBox{

            #movieSearch{
                display: flex;
                align-items: center;
                justify-content: space-between;

                border: 1px solid yellow;

                h2{
                    max-width: 20rem;
                    border: 1px solid green;
                }

                #formSearch{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    border: 1px solid blue;
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
    
    max-width: 50rem;
    width: 100%;
    /* flex-grow: 1; */
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};

    padding: 1.9rem 2.4rem;

    border: 0;
    border-radius: 1rem;
`;