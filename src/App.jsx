import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (quote) => {
    setPosts([...posts, quote]);
  };

  return (
    <div className="app-container">
      <div className="container py-5">
        <h1 className="text-center mb-4 app-title animate__animated animate__fadeInDown">
          📝 Random Quotes App
        </h1>
        <QuoteCard onCreatePost={handleCreatePost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
