import api from './api'

export async function getAll(header){
    const response = await api.get("/championship", header)

    return response.data
}

export async function getById(id, header){
    const response = await api.get(`/championship/${id}`, header)

    return response.data
}

export async function createChampionship(body, header){
    const response = await api.post("/championship", body, header)

    return response.data
}

export async function registerTeam(body, camp){
    const response = await api.post(`/register/${camp}`, body)

    return response.data
}