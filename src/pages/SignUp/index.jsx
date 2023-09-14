import { useState } from "react";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {Links} from '../../components/Links';
import { Container, Form, BgSignIn } from "./styles";
import { useNavigate } from "react-router-dom";

import {api} from '../../services/api';


export function SignUp(){
    const [name, setName] = useState(""); //Valor inicial da página é vazio
    const [email, setEmail] = useState(""); //Valor inicial da página é vazio
    const [password, setPassword] = useState(""); //Valor inicial da página é vazio

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !password || !email){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password})
            .then(()=>{
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error =>{
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível cadastrar")
                }
            })
    }

    return(
        <Container>
            <Form className="formLog">
                <h1>AppMovies</h1>
                <p>Seu catálogo pessoal de filmes.</p>
                <h3>Crie Sua Conta</h3>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e=>setName(e.target.value)}
                />
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

                <Button title="Cadastrar" onClick={handleSignUp}/>
                <Links to="/" icon={<FiArrowLeft/>} title="Voltar para o Login"/>

            </Form>
            <BgSignIn/>
        </Container>
    )
}