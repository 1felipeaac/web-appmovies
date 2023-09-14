import { Container} from "./styles";
import {Tags} from '../Tags';
import { Rating } from "../Rating";




// import {FiStar} from 'react-icons/fi';

export function Preview({to, title, rating, description, tags}){

    return(
        <Container to={to}>
            <div id="movieRating">
                <h2>
                    {title}
                </h2>
                <Rating count={rating}/>
            </div>
            <p>{description}</p>
            <span>
                {tags.map(tag => {
                    return <Tags title={tag} key={tag}/>
                })}
            </span>
        </Container>
    )
}