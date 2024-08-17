import axios from 'axios';
import { apiUrl } from "../Utils/Config";

export const fetchArticles = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (err) {
    console.log("Error fetching articles: ", err);
  }
};