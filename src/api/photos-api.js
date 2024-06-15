import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common[
  "Authorization"
] = `Client-ID NIabBYlrDU4JcNsdw-nJWiK9K-P7Gb1wdWS2yhxUOoo`;

const getPhotosApi = async (query, page) => {
  try {
    const { data } = await axios.get("/search/photos", {
      params: {
        query,
        per_page: 10,
        page,
      },
    });
    return data.results;
  } catch (error) {
    console.log("Something went wrong...");
  }
};

export default getPhotosApi;
