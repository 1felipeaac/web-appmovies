import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    align-items: center;

    margin-bottom: 2rem;
    
    > #link {
        position: absolute;
        left: 15rem;
        top: 7rem;

        z-index: 1;
    }
    
    > header {
        width: 100%;
        background-color: hsl(0, 100%, 95%, 0.1);
        text-align: center;

        
        div{
            position: relative;
            top: 8rem;

            padding-left: 4rem;

            /* cursor: pointer; */
            img {
                border-radius: 50%;
                height: 18.6rem;
                width: 18.6rem;
            }

            svg {
                position: relative;
                right: 6rem;
                bottom: 0rem;

                width: 5rem;
                height: 5rem;

                background-color: ${({theme}) => theme.COLORS.TULIP};
                border-radius: 50%;
                border: none;

                padding: 0 1.4rem;

                stroke: black;

                path{
                    width: 1rem;
                    height: 1rem;
                }

            }
        }
    }

`;

export const Form = styled.form`
    margin-top: 15rem;

`;

export const Avatar = styled.div`

> label{
    cursor: pointer;
    input{
        display: none;
    }
}
`

