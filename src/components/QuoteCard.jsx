import { useState, useEffect } from "react";

function QuoteCard({ onCreatePost }) {
  const [quote, setQuote] = useState(null);

  // Fetch random quote from API 
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": "Zzop0MueaPgHLppsDwLqpg==VjrowO8Xf2uOZVPE", 
        },
      });

      const data = await res.json();
      console.log(data);

      //  array like: [{quote: "...", author: "..."}]
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
    <div className="card border p-3 shadow-sm my-3">
      {quote ? (
        <>
          <p className="fs-5">"{quote.quote}"</p>
          <p className="text-muted">- {quote.author}</p>
          <div className="d-flex gap-2">

            <button
  className="btn btn-primary"
  onClick={() =>
    onCreatePost({
      content: quote.quote,  
      author: quote.author,
    })
  }
>
  Create Post
</button>

            <button className="btn btn-secondary" onClick={fetchQuote}>
              New Quote
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default QuoteCard;
