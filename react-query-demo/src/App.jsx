import  { QueryClient, QueryClientProvider } from 'react-query';
import PostComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent />
    </QueryClientProvider>
  );
}

export default App