import { Container} from "./styles";

export function Input({icon: Icon, ...rest}){

    return(
        <Container className="containerInput">
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </Container>
    )
}