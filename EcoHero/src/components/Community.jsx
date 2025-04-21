import { useState, useEffect } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    // Mock data; replace with backend API
    const mockPosts = [
      { id: 1, text: 'Started composting today!', author: 'User1', timestamp: new Date() },
      { id: 2, text: 'Any tips for zero-waste groceries?', author: 'User2', timestamp: new Date() },
    ];
    setPosts(mockPosts);
    // Placeholder for API
    /*
    fetch('https://your-backend-api.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => console.error('Error fetching posts'));
    */
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    if (!newPost) return;
    const updatedPosts = [
      ...posts,
      { id: Date.now(), text: newPost, author: 'Guest', timestamp: new Date() },
    ];
    setPosts(updatedPosts);
    setNewPost('');
    // Placeholder for API
    /*
    fetch('https://your-backend-api.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newPost, author: 'Guest' }),
    });
    */
  };

  return (
    <section id="community" className="py-20 bg-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Community Feed</h2>
        <form onSubmit={addPost} className="max-w-md mx-auto mb-6">
          <textarea
            placeholder="Share your eco-idea!"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="3"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Post
          </button>
        </form>
        <div className="max-w-md mx-auto text-left">
          {posts.map((post) => (
            <div key={post.id} className="mb-4 p-4 bg-white rounded shadow">
              <p className="text-gray-700">{post.text}</p>
              <p className="text-sm text-gray-500">
                By {post.author} at {new Date(post.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;