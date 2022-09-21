import { useState } from 'react';
import { Container, Form, Background } from './style';
import { Link } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';

import { useAuth } from '../../hooks/Auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = useAuth();
  console.log(data);

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
          type='email'
          placeholder='Email'
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          icon={FiLock}
          type='password'
          placeholder='Senha'
        />

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/register'>
          <ButtonText isActive title='Criar conta' />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
