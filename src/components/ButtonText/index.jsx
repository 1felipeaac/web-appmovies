import { Container } from "./styles";

export function ButtonText({ title, isactive = false, ...rest }) {
  return (
    <Container
      style={{ fontSize: `clamp(1rem, 4vw, 1.6rem)` }}
      type="button"
      {...rest}
      isactive={isactive}
    >
      {title}
    </Container>
  );
}
