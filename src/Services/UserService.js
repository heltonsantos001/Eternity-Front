import axios from "axios"

const baseUrl = "https://glorious-belt-bear.cyclic.app/"

export function SearchName(name) {
    const response = axios.get(`${baseUrl}/User/search?name=${name}`)
    return response
}

export const postFormData = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/User/resgiter`, formData);
        return response.data;
    } catch (error) {
        return
    }
};


export const loginFormData = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/Auth/login`, body);
        return response.data;
    } catch (error) {
        return
    }
};

export const getUserById = async(id) => {
    try {
        const response = await axios.get(`${baseUrl}/User/${id}`,);
        return response;
    } catch (error) {
        return
    }
};


export function UserUpdate(formData, token) {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = axios.patch(`${baseUrl}/user/update`, formData, config);
    return response;
}
