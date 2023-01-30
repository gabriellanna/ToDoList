import React from 'react'
import { BodyLogin, ContainerLogin } from './styles';
import Img from "../../assets/todo.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <BodyLogin>
            <div className="content_2">
                <img alt='Imagem de uma lista de tarefas' src={Img} />
            </div>
            <div className="content_1">
                <ContainerLogin>
                    <h1>To do List</h1>
                    <h2>Cadastro</h2>
                    <div className="content">
                        <TextField margin='normal' id="usuario" label="Usuário" type="text" variant="standard" fullWidth />
                        <TextField margin='normal' id="senha" label="Senha" type="password" variant="standard" fullWidth />
                        <TextField margin='normal' id="confirmarSenha" label="Confirmar Senha" type="password" variant="standard" fullWidth />
                        <div id="p2p"> <p>Já possui uma conta?</p> <p id='a' onClick={() => navigate("/login")}>Logar</p> </div>
                        <Button variant="contained">Cadastrar</Button>
                    </div>
                </ContainerLogin>
            </div>
        </BodyLogin>
    )
}

export default RegisterPage;