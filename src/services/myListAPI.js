// src/services/myListAPI.js
import axios from "axios";

const BASE_URL = "https://690963622d902d0651b38e85.mockapi.io/api/v1/mylist";

export const myListAPI = {
  async getAll() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      console.error("Error fetching My List:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async add(movie) {
    try {
      const { data } = await axios.post(BASE_URL, movie);
      return data;
    } catch (error) {
      console.error("Error adding to My List:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async remove(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error("Error removing from My List:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },
};
