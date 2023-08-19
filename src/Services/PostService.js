import axios from 'axios'

const baseUrl = "https://eternity.cyclic.app"

export function getAllPost() {
    const response = axios.get(`${baseUrl}/Post/feed`)
    return response
}


export function getAllPostUser(token) {

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    const response = axios.get(`${baseUrl}/Post/`, { headers })
    return response
}
export function Postar(formData, token) {
    const baseUrl = "https://eternity.cyclic.app";

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = axios.post(`${baseUrl}/Post/postagem`, formData, config);
    return response;
}
