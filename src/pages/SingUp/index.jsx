import { useState } from "react";
import { Container, Form, Background } from "./style";
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SingUp() {
    const [ name, setName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSingUp() {
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuario cadastrado com sucesso")
            navigate("/")
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
        
    }

    return (
        <Container>
            <Background />

            <Form>

                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>

                <Input onChange={e => setName(e.target.value)} icon={FiUser} type="text" placeholder="Nome" />

                <Input onChange={e => setEmail(e.target.value)} icon={FiMail} type="email" placeholder="Email" />

                <Input onChange={e => setPassword(e.target.value)} icon={FiLock} type="password" placeholder="Senha" />

                <Button onClick={handleSingUp} title="Cadastrar" />

                <Link to="/">
                    <ButtonText isActive title="Voltar para o login" />
                </Link>

            </Form>

            

        </Container>
    )
}