// src/hooks/useFilmData.js
import { useState, useEffect } from "react";
import { filmAPI } from "../services/api";

export const useFilmData = () => {
  const [data, setData] = useState({
    dataHero: [],
    dataMovies: [],
    topMovies: [],
    newReleaseMovies: [],
    trendingMovies: [],
    imgVertikal: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Ambil data per kategori secara paralel
        const [hero, movies, top, newReleases, trending, vertikal] =
          await Promise.all([
            filmAPI.getHeroData(),
            filmAPI.getMovies(),
            filmAPI.getTopMovies(),
            filmAPI.getNewReleases(),
            filmAPI.getTrendingMovies(),
            filmAPI.getVertikalMovies(),
          ]);

        setData({
          dataHero: hero,
          dataMovies: movies,
          topMovies: top,
          newReleaseMovies: newReleases,
          trendingMovies: trending,
          imgVertikal: vertikal,
        });

        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching film data");
        console.error("Error fetching film data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
