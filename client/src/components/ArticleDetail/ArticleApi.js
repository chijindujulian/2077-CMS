import axios from 'axios';
import { apiUrl } from "../Utils/Config";

export const fetchArticle = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}${id}/`);
    return response.data.data;
  } catch (err) {
    console.log("Error fetching article: ", err);
  }
};