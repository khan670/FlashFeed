import { getTodayDate } from "@/utils/dateUtils";

// get the headline
export const getHeadline = async () => {
  const res = await fetch(
    // `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=fbeb05dc683449cd8b11d111098bc7e0"
    // `https://newsapi.org/v2/top-headlines?country=us&apiKey=fbeb05dc683449cd8b11d111098bc7e0`
  );
  if (!res.ok) throw new Error("Error while fetchin data");
  const response = await res.json();
  if (response.error) {
  }
  return response;
};

// get the searched news
export const getSearchedNews = async ({
  query,
  pageSize,
  page,
  category = "business",
}: {
  query: string;
  pageSize: number;
  page: number;
  category: string;
}) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&category=${category}&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=${process.env.API_KEY}`
    );
    if (!res.ok) throw new Error("Error while fetching data");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
//trending news fetching data

export const getTrendingNews = async () => {
  try {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=trending&sortBy=popularity&apiKey=fbeb05dc683449cd8b11d111098bc7e0"
    );
    if (!res.ok) throw new Error("error while fetching the data");
    const response = await res.json();
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};

// get the latest news
export const getLatestNews = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=latest&from=${getTodayDate()}&to=${getTodayDate()}&sortBy=popularity&apiKey=fbeb05dc683449cd8b11d111098bc7e0`
    );
    if (!res.ok) throw new Error("Error while fetchign data");
    const response = await res.json();
    return response;
    //
  } catch (error: any) {
    console.log(error.message);
  }
};
