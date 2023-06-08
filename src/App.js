import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Post from './components/Post';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ReactPost from './components/ReactPost';

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/header" element={<Header />} />
						<Route path="/react-post" element={<ReactPost />} />
						<Route path="/react-query" element={<Post />}></Route>
					</Routes>
				</BrowserRouter>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</div>
	);
}

export default App;
