import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Links } from "../../components/Links";

import { useAuth } from "../../hooks/auth";

import { Container, Form, BgSignIn } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container id="container">
      <Form className="formLog">
        <div className="formTitles">
          <h1>AppMovies</h1>
          <p>Seu catálogo pessoal de filmes.</p>
          <h3>Faça seu login</h3>
        </div>
        <div className="submitForm">
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn} />
          <Links to="/register" title="Criar conta" />
        </div>
      </Form>
      <BgSignIn />
    </Container>
  );
}
