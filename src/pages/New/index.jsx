import { Container, Form } from './style'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'

export function New() {
    return (
        <Container>

            <Header />

            <main>

                <Form>

                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            <ButtonText title="voltar" />
                        </Link>
                    </header>

                    <Input placeholder="Título" />

                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis" >

                        <NoteItem value="https://google.com.br" />

                        <NoteItem placeholder="Novo link" isNew />
                    </Section>

                    <Section title="Marcadores" >
                        <div className='tags'>
                            <NoteItem value="React" />
                            <NoteItem placeholder="Nova tag" isNew />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>

        </Container>
    )
}