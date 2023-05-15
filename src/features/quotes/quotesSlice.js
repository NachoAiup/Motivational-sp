import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuote } from "../../api/quotes/index";

const initialState = {
  quote: "",
  loading: true,
  failedToLoad: false
};

export const fetchQuotesUrls = createAsyncThunk(
  "quotes/fetchQuotesUrls",
  async () => {
    const response = await getQuote();
    console.log(response);
    return response;
  }
);

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  extraReducers: {
    [fetchQuotesUrls.pending]: (quotes) => {
      quotes.loading = true;
    },
    [fetchQuotesUrls.fulfilled]: (quote, action) => {
      return {
        ...action.payload,
        loading: false,
        failedToLoad: false
      };
    },
    [fetchQuotesUrls.rejected]: (quotes) => {
      quotes.loading = false;
      quotes.failedToLoad = true;
    }
  }
});

export const selectQuote = (state) => {
  return state.quotes.quote;
};

export default quoteSlice.reducer;
