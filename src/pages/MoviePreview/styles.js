import styled from 'styled-components';

export const Container = styled.div`

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

    }
`;

export const ContentHeader = styled.div`

    > #boxLinks{
        display: flex;
        align-items: center;

        justify-content: space-between;
    }

    >#link{
        justify-content: flex-start;
    }

    > #titleRating{
        display: flex;
        align-items: center;
        gap:1.9rem;

        margin: 2.4rem 0;

        span{

            svg{
                width: 2rem;
                color: ${({theme}) => theme.COLORS.TULIP};

                &:last-child{
                color: ${({theme}) => theme.COLORS.WHITE};

                }
            }
        }
    }
`;

export const ContentTags = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    width: 100%;

    padding: 4rem 0;
`;

export const Profile = styled.span`
    display: flex;
    align-items: center;

    > .box{
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    > #user{
        width: 19.4rem;

        img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
        }
    }

    > #createdAt {
        
        svg{
            color: ${({theme}) => theme.COLORS.TULIP}
        }
    }
`;

export const Paragraph = styled.p`
    text-align: justify;
    font-size: 1.6rem;
`;
