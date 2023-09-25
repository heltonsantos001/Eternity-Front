import axios from 'axios'

const baseUrl = "https://blue-smiling-katydid.cyclic.app/"

export async function getAllPost() {
    try {
        const response = await axios.get(`${baseUrl}/Post/feed`)

        return response
        
    } catch (error) { console.log("erro ao buscar post:", error) }
}


export async function getAllPostUser(id) {
    try {
        const response = await axios.get(`${baseUrl}/Post/ByPost/${id}`)

        return response

    } catch (error) {
        console.log("Erro ao buscar usuario:", error);
    }
}

export async function Postar(formData, token) {

    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.post(`${baseUrl}/Post/postagem`, formData, config);

        return response;

    } catch (error) { console.log("Erro ao tentar fazer uma postagem", error) }
}

export async function LikeService(token, id) {
    try {
        const headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.patch(`${baseUrl}/Post/like/${id}`, null, { headers });

        return response;

    } catch (error) {
        console.log("Erro ao tentar dar like", error);
    }
}


export const PostId = async (id) => {
    try {

        const response = await axios.get(`${baseUrl}/Post/${id}`)

        return response.data

    } catch (error) { console.log("Error ao buscar post por id", error) }

}


export async function addComment(token, comment, id) {
    try {

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.patch(`${baseUrl}/Post/comments/${id}`, { comment }, { headers });

        return response;

    } catch (error) {
        console.log("Erro ao adicionar comentario ", error);
    }
}


export async function deleteComment(id, idComment, token) {

    try {

        const headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        };

        await axios.patch(`${baseUrl}/Post/comments/${id}/${idComment}`, null, { headers });

        return

    } catch (error) {
        console.log("Erro ao deletar comentario", error);
    }
}


export async function deletePost(id, token) {
    try {

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.delete(`${baseUrl}/Post/delete/${id}`, { headers });

        return response;

    } catch (error) {
        console.log("Erro ao deletar post", error);
    }
}
