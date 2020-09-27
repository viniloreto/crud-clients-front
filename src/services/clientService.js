import axios from 'axios';

const basePath = process.enc.REACT_APP_API_URL;

class ClientService {
    
    async getClients(page, limit) {
        let uri = `${basePath}/clients/allClients`;

        if(page) {
            uri += `?page=${page}`
            if(limit) {
                uri += `&limit=${limit}`
            }
        }

        const response = await axios.get(uri)
        return response ? response.data : {};
    }

    async editClient(body) {
        let uri = `${basePath}/clients/editClient`;

        const response = await axios.put(uri, body)
        return response ? response.data : {};
    }

    async deleteClient(id) {
        let uri = `${basePath}/clients/deleteClient?id=${id}`;
        return axios.delete(uri)
    }

    async addClient(body) {
        let uri = `${basePath}/clients/addClient`;

        const response = await axios.post(uri, body)
        return response ? response.data : {};
    }

}   

export default new ClientService();



