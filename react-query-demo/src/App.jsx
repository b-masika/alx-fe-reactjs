import  { QueryClient, QueryClientProvider } from 'react-query';
import PostComponent from './components/PostComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostComponent />
    </QueryClientProvider>
  );
}

export default App