import React, { useEffect, useState } from 'react'
import { Container, Content, Header, Tarefas } from './styles';
import Img from "../../assets/todo-branco.png"
import Img2 from "../../assets/empty-data.svg"
import Button from '@mui/material/Button';
import { getTarefas } from '../../Services/api';

const HomePage2 = () => {

  useEffect(() => {
    consulta();
  }, []);

  const [tarefas, setTarefas] = useState([]);
  const consulta = async () => {
    const response = await getTarefas().catch(function (err) {
      console.log(err)
    })
    if (response != null) {
      setTarefas(response.data.data)
    }
  }

  console.log(tarefas)


  return (
    <>
      <Header>
        <h1>Lista de Tarefas</h1>
        <img alt='Imagem de uma lista de tarefas' src={Img} />
      </Header>
      <Container>
        <Content>
          <div id='div1'>
            <Button id="bt1" variant="contained">Adicionar Tarefa</Button>
          </div>
          <div id="lista-de-tarefas">
            {tarefas.map((tarefa) => <Tarefas>{tarefa.nome}, {tarefa.descricao}, {tarefa.dataDeConclusao}</Tarefas>)}
          </div>
        </Content>
      </Container>
    </>

  )
}

export default HomePage2;