import axios from 'axios'

const baseUrl = "https://eternity.cyclic.app"

export function getAllPost() {
    const response = axios.get(`${baseUrl}/Post/feed`)
    return response
}

