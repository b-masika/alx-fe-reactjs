import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');  
  return response.json();
};

const PostComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Posts</h2>
        <button onClick={() => refetch()}>Refresh Posts</button>
        <ul>
            {data && data.map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        ))}
        </ul>
        
      </div>
    );
  };

export default PostComponent;