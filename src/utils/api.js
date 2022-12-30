import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
   key: "AIzaSyA27pdFBAFMEAPvaH0mS6t0T1qiz5rRv1E",
   cx: "06ac1bf2fe3204628",
};

export const fetchDataFromApi = async (payload) => {
   const { data } = await axios.get(BASE_URL, {
      params: { ...params, ...payload },
   });
   return data;
};
