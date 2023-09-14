import { Container } from "./styles";
import { FiPlus } from 'react-icons/fi';


export function Button({title, loading = false, icon , ...rest}){
    return(
        <Container id="button"
            disabled={loading}
            {...rest}
        >
            {icon}
            {loading ? 'Salvar' : title}
        </Container>
    );
}