import styled from "styled-components";


export const BodyLogin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #333;
    display: flex;
    flex-direction: row;

    .content_1 {
        width: 50%;
        height: 100%;
        background-color: #333;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content_2 {
        width: 50%;
        height: 100%;
        background-color: #E9E3CE;

        img {
            width: 100%;
            height: 100%;
            position: static;
        }
    }
`;

export const ContainerLogin = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 50px;
    background-color: #E9E3CE;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
        width: 60%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            font-size: small;
            color: #7e7e7e;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 4px;
        }
        
        #a {
            cursor: pointer;
            color: #737373;
            font-weight: bolder;
        }

        #a:hover {
            color: #1a2dd7;
            transition: 0.2s;
        }

        #p2p {
            display: flex;
            flex-direction: row;
            
        }
    }
`;
