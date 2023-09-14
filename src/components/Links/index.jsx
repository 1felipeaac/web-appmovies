import { Container } from "./styles";

export function Links({title, to,icon, ...rest}){
    return(
        <Container to={to} id="link">
            {icon}
            {title}
        </Container>
    )
}