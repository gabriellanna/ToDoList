import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 8vh;

    display: flex;
    align-items: center;

    background-color: #333;
    color: #fff;

    h1 {
        margin-left: 70px;
    }

    img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border-radius: 10px;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 92vh;

    background-color: #E9E3CE;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 75%;
    height: 90%;
    background-color: rgba( 0, 0, 0, 0.1);
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 80%;

    #div1{
        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;

        #bt1{
            width: 100%;
            margin-top: 5vh;
            max-width: 400px;
        }
    }

    #lista-de-tarefas{
            width: 80%;
            height: 100vh;

            background-color: aqua;
    }
`;

export const Tarefas = styled.div`
    margin: 2vh;

    width: 95%;
    height: 10%;

    background-color: aliceblue;
`;