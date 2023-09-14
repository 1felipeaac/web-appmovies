import { Container, Profile, GoProfile, GoHome } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function Header(){

    const {signOut, user} = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    return(
        <Container id="containerHeader">
            <GoHome to="/appmovies">
                <h1>Appmoveis</h1>
            </GoHome>
            <Profile>
                <div>
                    <GoProfile to="/profile">
                        <p>{user.name}</p>
                    </GoProfile>
                    <input type="button" value="sair" onClick={signOut}/>
                </div>
                <GoProfile to="/appmovies/profile">
                    <img src={avatarURL} alt={user.name} />
                </GoProfile>
            </Profile>
        </Container>
    )
}