import axios from 'axios';

const basePath = process.env.REACT_APP_API_URL;

class ClientService {
    
    async getClients({currentPage, limit, inputValue}) {
        let uri = `${basePath}/clients/allClients`;
        if(currentPage) {
            uri += `?page=${currentPage}`
            if(limit) {
                uri += `&limit=${limit}`
            }
            if(inputValue) {
                uri += `&search=${inputValue}`
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



