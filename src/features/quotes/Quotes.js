import { useSelector, useDispatch } from "react-redux";
import { selectQuote, fetchQuotesUrls } from "./quotesSlice";
import React, { useEffect } from "react";

export default function Quotes() {
  const quote = useSelector(selectQuote);
  const dispatch = useDispatch();
  console.log(quote);
  useEffect(() => {
    dispatch(fetchQuotesUrls());
  }, [dispatch]);

  return <p>“{quote}“</p>;
}
