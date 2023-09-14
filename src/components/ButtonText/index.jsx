import { Container } from "./styles";

export function ButtonText({title, isactive=false,...rest}) {
  return(
      <Container 
      type="button"
      {...rest}     
      isactive={isactive} 
      >
        {title}
      </Container>
  );
}