import React from 'react'
import { BodyLogin, ContainerLogin } from './styles';
import Img from "../../assets/todo.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <BodyLogin>
            <div className="content_1">
                <ContainerLogin>
                    <h1>To do List</h1>
                    <h2>Login</h2>
                    <div className="content">
                        <TextField margin='normal' id="standard-basic" label="Usuário" variant="standard" fullWidth />
                        <TextField margin='normal' id="standard-basic" label="Senha" variant="standard" fullWidth />
                        <div id="p2p"> <p>Não possui uma conta?</p> <p id='a' onClick={() => navigate("/register")}>Registrar</p> </div>
                        <Button variant="contained" onClick={()=>navigate("/")}>Logar</Button>
                    </div>
                </ContainerLogin>
            </div>
            <div className="content_2">
                <img alt='Imagem de uma lista de tarefas' src={Img} />
            </div>
        </BodyLogin>
    )
}

export default LoginPage;