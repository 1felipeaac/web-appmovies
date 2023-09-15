import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Button({ title, loading = false, icon, ...rest }) {
  return (
    <Container
      style={{ fontSize: `clamp(1rem, 4vw, 1.6rem)` }}
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
