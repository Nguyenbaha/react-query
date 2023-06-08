import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Post from './components/Post';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Post />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</div>
	);
}

export default App;
