import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 6.4rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    width: 100%;
    height: 11.6rem;

    padding: 2.4rem 9rem;

    > h1 {
        color: ${({theme})=> theme.COLORS.TULIP};
    }
`;



export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 31.5rem;

    gap: .5rem;

    cursor: pointer;

    >div{
        
        display: flex;
        flex-direction: column;

        align-items: flex-end;


        input{
            background: none;
            border: none;

            color: ${({theme})=> theme.COLORS.GRAY_200};

            cursor: pointer;
            
            &:hover{
                transform: scale(1.1);
                color: ${({theme})=> theme.COLORS.TULIP};

            }
        }
    }

`;

export const GoProfile = styled(Link)`
    >p{
        color: ${({theme})=> theme.COLORS.WHITE};
    }

    >img{
        width: 6.4rem;
        height: 6.4rem;

        border-radius: 50%;
    }
`;

export const GoHome = styled(Link)`
    color: ${({theme}) => theme.COLORS.TULIP};
`;
