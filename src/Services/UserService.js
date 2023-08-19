import axios from "axios"

const baseUrl = "https://eternity.cyclic.app"

export function SearchName(name) {
    const response = axios.get(`${baseUrl}/User/search?name=${name}`)
    return response
}

export const postFormData = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/User/resgiter`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const loginFormData = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/Auth/login`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async(id) => {
    try {
        const response = await axios.get(`${baseUrl}/User/${id}`,);
        return response;
    } catch (error) {
        throw error;
    }
};