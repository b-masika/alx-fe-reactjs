import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const PostComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts,
  {cacheTime: 300000, // Cache data for 5 minutes
   staleTime: 30000, // Data is considered fresh for 30 seconds
   refetchOnWindowFocus: false, // Prevent refetching when the window regains focus
   keepPreviousData: true, // Keep previous data while fetching new data
   retry: 2, // Retry failed requests up to 2 times
   onSuccess: () => console.log('Posts fetched successfully!'),
   onError: (err) => console.error('Error fetching posts:', err)
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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

export default PostsComponent;