import axios from "axios"

const baseUrl = "https://eternity.cyclic.app"

export function SearchName(name) {
    const response = axios.get(`${baseUrl}/User/search?name=${name}`)
    return response
}