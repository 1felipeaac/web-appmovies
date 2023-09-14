import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Links } from "../../components/Links";
import {FiMail, FiLock, FiUser, FiCamera, FiArrowLeft} from 'react-icons/fi';
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";
// import {Link} from 'react-router-dom';


export function Profile(){

    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        const updated={
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile});

    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
        setAvatarFile(file);

    }

    return(
        <Container id="containerProfile">
            <Links to="/" icon={<FiArrowLeft/>} title="voltar"/>
            <header>
                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
            </header>
            <Form>
                <Input 
                    icon={FiUser} 
                    placeholder="Usuário" 
                    value={name}
                    onChange = {e => setName(e.target.value)}
                />
                <Input 
                    icon={FiMail}
                    placeholder="E-mail" 
                    value={email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <Input 
                    icon={FiLock}
                    type="password" 
                    placeholder="Senha Atual"
                    onChange = {e => setPasswordOld(e.target.value)}
                />
                <Input 
                    icon={FiLock}
                    type="password" 
                    placeholder="Nova Senha"
                    onChange = {e => setPasswordNew(e.target.value)}
                />
                
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}