import { Container, Form, Background } from "./style";
import { Link } from 'react-router-dom'
import { FiLock, FiMail } from 'react-icons/fi'

import { useContext } from "react";
import { MyContext } from "../../MyContext"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SingIn() {

    const data = useContext(MyContext)
    console.log("Meu contexto =>", data)

    return (
        <Container>
            <Form>

                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>

                <Input icon={FiMail} type="email" placeholder="Email" />

                <Input icon={FiLock} type="password" placeholder="Senha" />

                <Button title="Entrar" />

                <Link to="/register">
                    <ButtonText isActive title="Criar conta" />
                </Link>

            </Form>

            <Background />

        </Container>
    )
}