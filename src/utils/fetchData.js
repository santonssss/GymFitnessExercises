export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d9f8b6d0e6msh079063d893e520cp14f1dajsn747cd900aa8c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const videoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "03c75afa2amsh8e8dd4869ab2cd4p1f3770jsn68a70a494f34",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json().catch((err) => {
    console.warn(err);
  });
  return data;
};
