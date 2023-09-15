import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        --ff-primary: 'Roboto Slab', serif;
        --ff-secondary: 'Roboto', sans-serif;
    }

    
    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        font-family: var(--ff-primary);
        font-size: 1.6rem;

        -webkit-font-smoothing: antialiased;
    }

    .containers{
        padding: 5rem 20rem;
    }

    main::-webkit-scrollbar{
        width: .5rem;
    }
    main::-webkit-scrollbar-track{
        background-color: transparent;
    }
    main::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.TULIP};
        border-radius: 1rem;
    }

    textarea, input{
        font-family: var(--ff-secondary);
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: --ff-primary 0.2s;
    }
    button:hover, a:hover {
        filter: brightness(0.9)
    }

    @media(max-width:728px) {

        .containers{
            padding: 1rem;
        }
       
        main{
            padding: 2rem 1rem;
        }

        .formLog{
            padding: 2rem 1rem;

            /* .containerInput, .containerButton{
                width: 30rem;
            } */

        }

        #movieSearch{
            h2{
                text-align: center;
            }
            flex-direction: column;
            gap: 1rem;
            padding-top: 2rem;
        }


        #containerHeader{
            flex-wrap: wrap;
            gap: .5rem;
            height: 19.5rem;
            padding: 1rem 2rem;
            justify-content: center;

            > div{
                justify-content: center;
            }
        }


        #containerTags{
            padding: .8rem .6rem;

        }

        #buttons{
            flex-wrap: nowrap;
            gap: 2rem;
        }

        #inputsForm{
            flex-wrap: wrap;
        }

        #containerProfile{

            > #link{
                left: 1rem;
                top: 2rem;
            }
        }
    }
`;
