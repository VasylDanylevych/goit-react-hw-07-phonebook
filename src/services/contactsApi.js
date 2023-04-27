import axios from 'axios';

const URL = 'https://644ac481a8370fb321578529.mockapi.io';

export default class ContactsApi {
  async fetchContacts() {
    try {
      const response = await axios.get(`${URL}/contacts`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async addContact(data) {
    try {
      const response = await axios.post(`${URL}/contacts`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteContact(id) {
    try {
      const response = await axios.delete(`${URL}/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
