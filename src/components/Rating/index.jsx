import {FaStar} from 'react-icons/fa';

export function Rating({count}){
    const stars = [];
    for (let i = 0; i < count; i++){
        stars.push(<span key={i}><FaStar/></span>)
    }
    return(
        <div>
            {stars}
        </div>
    )

}


