import api from './api'

export async function getJobs(header){
    const response = await api.get("/jobs", header)

    return response.data
}

export async function getById(id, header){
    const response = await api.get(`/jobs/${id}`, header)

    return response.data
}


export async function registerTeam(body, camp){
    const response = await api.post(`/register/${camp}`, body)

    return response.data
}