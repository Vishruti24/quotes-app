function PostList({ posts }) {
  return (
    <div className="my-4">
      <h3>Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="border rounded p-3 mb-2">
            <p>"{post.content}"</p>
            <p className="text-muted">- {post.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
