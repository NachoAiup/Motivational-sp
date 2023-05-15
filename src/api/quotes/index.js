const API_URL = `https://api.api-ninjas.com/v1/quotes?category=courage`;

export const getQuote = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Api-Key": process.env.REACT_APP_QUOTES_API_KEY,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json[0].quote);
  return { quote: json[0].quote };
};

const quoteApi = {
  getQuote,
};

export default quoteApi;
