import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container
      style={{ width: `clamp(10rem, 6rem + 75vw, 50rem)` }}
      className="containerInput"
    >
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
