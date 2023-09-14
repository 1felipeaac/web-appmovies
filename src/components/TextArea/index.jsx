import { Container} from "./styles";

export function TextArea({placeholder, value, ...rest}){
    return(
        <Container placeholder={placeholder} {...rest}>
            {value}
        </Container>
    )
}