import axios from "axios";

const DATA_URL = "/assets/data.json";

export const filmAPI = {
  // Fetch semua data
  async getAllData() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data;
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch data hero
  async getHeroData() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data.dataHero || [];
    } catch (error) {
      console.error("Error fetching hero data:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch data movies
  async getMovies() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data.dataMovies || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch top movies
  async getTopMovies() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data.topMovies || [];
    } catch (error) {
      console.error("Error fetching top movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch new releases
  async getNewReleases() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data.newReleaseMovies || [];
    } catch (error) {
      console.error("Error fetching new releases:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch trending movies
  async getTrendingMovies() {
    try {
      const { data } = await axios.get(DATA_URL);
      return data.trendingMovies || [];
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch movie by ID
  async getMovieById(id) {
    try {
      const { data } = await axios.get(DATA_URL);
      const allMovies = [
        ...(data.dataMovies || []),
        ...(data.topMovies || []),
        ...(data.newReleaseMovies || []),
        ...(data.trendingMovies || []),
      ];
      return allMovies.find((movie) => movie.id === parseInt(id));
    } catch (error) {
      console.error("Error fetching movie by ID:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },
};
