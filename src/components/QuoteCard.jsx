import { useState, useEffect } from "react";

function QuoteCard({ onCreatePost }) {
  const [quote, setQuote] = useState(null);

  // Fetch random quote
  const fetchQuote = async () => {
    try {
      const API_KEY = import.meta.env.VITE_QUOTES_API_KEY;

      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": API_KEY },
      });

      const data = await res.json();
      if (data && data.length > 0) {
        setQuote(data[0]);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-card card border-0 shadow-lg p-4 mb-4 animate__animated animate__fadeIn">
      {quote ? (
        <>
          <blockquote className="blockquote">
            <p className="fs-5">“{quote.quote}”</p>
            <footer className="blockquote-footer">{quote.author}</footer>
          </blockquote>
          <div className="d-flex gap-3 mt-3 justify-content-center">
            <button
              className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite"
              onClick={() =>
                onCreatePost({
                  content: quote.quote,
                  author: quote.author,
                })
              }
            >
              Create Post
            </button>
            <button className="btn btn-dark btn-lg" onClick={fetchQuote}>
              New Quote
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default QuoteCard;
