import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import PostList from "./components/PostList";


function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (quote) => {
    setPosts([...posts, quote]);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"> Random Quotes App</h1>
      <QuoteCard onCreatePost={handleCreatePost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
