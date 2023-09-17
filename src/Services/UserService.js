import axios from "axios"

const baseUrl = "https://blue-chipmunk-coat.cyclic.app/"

export function SearchName(name) {
    try {
        const response = axios.get(`${baseUrl}/User/search?name=${name}`);

        return response

    } catch (e) {
        console.log("Error ao pesquisar o nome:", e)
    }

}

export const postFormData = async (formData) => {
    try {

        const response = await axios.post(`${baseUrl}/User/resgiter`, formData);
        return response.data;

    } catch (e) {
        console.log("Erro ao tentar se registrar:", e);
    }
};


export const loginFormData = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/Auth/login`, body);

        return response.data;

    } catch (e) {
        console.log("Erro ao tentar fazer login:", e)
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/User/${id}`,);
        return response;
    } catch (e) {
        console.log("Erro ao tentar buscar usuario por id:", e)
    }
};


export function UserUpdate(formData, token) {
    try {
        
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = axios.patch(`${baseUrl}/user/update`, formData, config);

        return response;

    } catch (e) {
        console.log("Erro ao tentar modificar usuario:", e)
    }


}
