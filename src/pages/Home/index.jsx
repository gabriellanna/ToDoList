import React from 'react'
import { Container, Content, Header } from './styles';
import Img from "../../assets/todo-branco.png"
import Img2 from "../../assets/empty-data.svg"
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <>
      <Header>
        <h1>Lista de Tarefas</h1>
        <img alt='Imagem de uma lista de tarefas' src={Img} />
      </Header>
      <Container>
        <Content>
          <div>
            <Button variant="contained">Logar</Button>
          </div>
        </Content>
      </Container>
    </>

  )
}

export default HomePage;