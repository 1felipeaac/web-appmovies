/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({ title, loading = false, icon, ...rest }) {
  return (
    <Container
      style={{width: `clamp(10rem, 6rem + 75vw, 50rem)` }}
      id="button"
      className="containerButton"
      disabled={loading}
      {...rest}
    >
      {icon}
      {loading ? "Salvar" : title}
    </Container>
  );
}
