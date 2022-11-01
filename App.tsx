import Navigation from '@/navigation/Navigation'
import { store } from '@/store/store'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
	return (
		<>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</QueryClientProvider>
				<StatusBar style='light' />
			</Provider>
		</>
	)
}
