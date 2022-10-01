import api from './api'

export async function getAll(){
    const response = await api.get("/championship")

    return response.data
}

export async function createChampionship(body){
    const response = await api.post("/sign-in", body)

    return response.data
}