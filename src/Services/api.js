import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5198/",
})

export const createTarefa = (tarefa) => {
    return api.post("/Tarefa", tarefa);
};

export const getTarefas = async () => {
    return await api.get("Tarefa");
};