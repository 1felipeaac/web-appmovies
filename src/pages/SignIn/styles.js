import styled from "styled-components";
import bgLogin from "../../assets/backgroundSign.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;

  min-width: 32rem;
`;

export const Form = styled.form`
  padding: 10.5rem 13.4rem;

  .formTitles {

    h1 {
      color: ${({ theme }) => theme.COLORS.TULIP};
      font-size: 4.8rem;
      max-width: 30rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
      margin-bottom: 4.8rem;
    }

    h3 {
      font-size: 2.4rem;
      margin-bottom: 4.8rem;
    }
  }

  .submitForm {
    button {
      margin-top: 2.4rem;
    }

    button:last-child {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const BgSignIn = styled.div`
  flex: 1;
  background: url(${bgLogin}) no-repeat center center;
  background-size: cover;
`;
