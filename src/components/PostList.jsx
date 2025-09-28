function PostList({ posts }) {
  return (
    <div className="my-5">
      <h3 className="mb-3">✨ Posts</h3>
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            className="post-card card shadow-sm border-0 p-3 mb-3 animate__animated animate__fadeInUp"
          >
            <blockquote className="blockquote mb-0">
              <p>“{post.content}”</p>
              <footer className="blockquote-footer">{post.author}</footer>
            </blockquote>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
