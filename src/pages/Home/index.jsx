import { FiPlus } from 'react-icons/fi'
import { Container, Content, Brand, Menu, Search, NewNote, ButtonLink } from './style'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'


export function Home() {
    return(
        <Container>

            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText isActive title="Todos" /></li>
                <li><ButtonText title="Express" /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
            
            <Content>  
                <Section title="Minhas notas">
                    <ButtonLink to="/details/1">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: 1, name: 'react'},
                            {id: 2, name: 'Nodejs'}
                        ]
                    }} />
                    </ButtonLink>
                    
                </Section>

            </Content>


        </Container>


    )
}