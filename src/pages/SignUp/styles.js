import styled from "styled-components";
import bgLogin from "../../assets/backgroundSign.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 10.5rem 13.4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TULIP};
    font-size: 4.8rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    margin-bottom: 4.8rem;
  }

  > h3 {
    font-size: 2.4rem;
    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  > button:last-child {
    width: 100%;
    justify-content: center;
  }
`;

export const BgSignIn = styled.div`
  flex: 1;
  background: url(${bgLogin}) no-repeat center center;
  background-size: cover;
`;

export const Back = styled(Link)``;
