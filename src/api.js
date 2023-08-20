import axios from 'axios';

const BASE_URL = 'https://64d92f23e947d30a2609f9ab.mockapi.io';



export const requestContacts = async () => {
    const response = await axios.get(`${BASE_URL}/contacts`);
    
    return response.data;
}

export const postContact = async (body) => {
    const response = await axios.post(`${BASE_URL}/contacts`, body);

    return response.data;
}

export const delContact = async (id) => {
    const response = await axios.delete(`${BASE_URL}/contacts/${id}`);

    return response.data;
}