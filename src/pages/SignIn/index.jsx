import { useState } from 'react';
import {FiMail, FiLock} from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Links } from '../../components/Links';

import { useAuth } from '../../hooks/auth';

import { Container, Form, BgSignIn } from "./styles";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({email, password})
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e=>setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=>setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>
                <Links to="/register" title="Criar conta"/>
                
            </Form>
            <BgSignIn/>
        </Container>
    )
}