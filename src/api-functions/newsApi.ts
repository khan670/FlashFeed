
// const API_KEY="fe392dbef9cf403f9facc275cc738ca8"
// ANOTHER
const API_KEY="fbeb05dc683449cd8b11d111098bc7e0"
// get the headline
export const getHeadline = async () => {
  // `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  const res = await fetch(
    // "https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=2&apiKey=fbeb05dc683449cd8b11d111098bc7e0"
    // "https://newsapi.org/v2/top-headlines?country=us&apiKey=fbeb05dc683449cd8b11d111098bc7e0"
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error("Error while fetchin data");
  const response = await res.json();
  return response;
};
//trending news fetching data

export const getTrendingNews = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=trending&sortBy=popularity&apiKey=${API_KEY}`
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
      `https://newsapi.org/v2/everything?q=latest-news&sortBy=popularity&apiKey=${API_KEY}`
      // `https://newsapi.org/v2/everything?q=latest&from=${getTodayDate()}&sortBy=popularity&apiKey=fbeb05dc683449cd8b11d111098bc7e0`
    );

    if (!res.ok) throw new Error("Error while fetching data");

    const response = await res.json();
    console.log("latest news is runing ");
    console.log(response);
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return null; // Return null to prevent errors in the UI
  }
};

// get the news by search
export async function getSearchedNews({query,page=1}:{query?:string,page:number}){
// export async function getSearchedNews(){
const url = query
  ? `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${page}&apiKey=${API_KEY}`
  : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
try{
  const res=await fetch(url)
  // const res=await fetch("https://newsapi.org/v2/everything?q=pakistan&apiKey=fbeb05dc683449cd8b11d111098bc7e0")
  if(!res.ok) throw new Error("something went wrong while fetching the news");
  const response=await res.json();
  return response
}catch{
  console.log("error while fetching the data of the query")
}
}
// get news by category 
export async function getNewsByCategory({category}:{category:string}){
  try{
   const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=4&page=1&apiKey=${API_KEY}`);
   if(!res.ok) throw new Error("error while fetching the news according to the category");
   const response=await res.json();
   return response
  }catch{
  console.log("error while fetching the category:)")
  }
}